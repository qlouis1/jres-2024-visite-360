/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function () {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var app_data = window.APP_DATA;
  var Hammer = Marzipano.dependencies['hammerjs'];
  var settings = {
    "name": "JRES 2024 - Visite 36",
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false,
    "firstScene": "img-16"

  }

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function () {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function () {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);
  var hammerMouse = viewer._hammerManagerMouse;

  var createHotspot = {
    link: function (hotspot, scene) {
      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('link-hotspot');

      // Create image element.
      var icon = document.createElement('img');
      icon.src = 'img/link.png';
      icon.classList.add('link-hotspot-icon');

      // Set rotation transform.
      var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
      for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i];
        icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
      }

      // Add click event handler.
      wrapper.addEventListener('click', function () {
        switchScene(findSceneById(hotspot.target));
      });

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      // Create tooltip element.
      var tooltip = document.createElement('div');
      tooltip.classList.add('hotspot-tooltip');
      tooltip.classList.add('link-hotspot-tooltip');
      tooltip.innerHTML = findSceneDataById(hotspot.target).name;

      wrapper.appendChild(icon);
      wrapper.appendChild(tooltip);

      return wrapper;
    },
    nav: function (hotspot, scene) {
      // Create wrapper element to hold icon and content.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('nav-hotspot');

      // Create icon element
      var icon = document.createElement('img');
      if ("icon" in hotspot) {
        icon.src = 'img/' + hotspot.icon;
      } else {
        icon.src = 'img/link.png';
      }
      icon.classList.add('nav-hotspot-icon');
      // Set rotation transform.
      var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
      for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i];
        icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
      }

      // Create content elements
      var content = document.createElement('div');
      content.classList.add('nav-content');

      if (hotspot.target.length == 1) {
        var span = document.createElement('span');
        var p = document.createElement('p');
        p.innerHTML = findSceneDataById(hotspot.target[0]).name;
        span.appendChild(p);
        // Add click event handler.
        span.addEventListener('click', function () {
          switchScene(findSceneById(hotspot.target[0]), scene);
        });
        content.appendChild(span);
      } else {
        var ul = document.createElement('ul');
        hotspot.target.forEach(target => {
          var li = document.createElement('li');
          li.innerHTML = findSceneDataById(target).name;
          // Add click event handler.
          li.addEventListener('click', function () {
            switchScene(findSceneById(target), scene);
          });
          ul.appendChild(li);
        });
        content.appendChild(ul);
      }

      stopTouchAndScrollEventPropagation(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(content);
      return wrapper;
    },
    stairs: function (hotspot, scene) {
      // Create wrapper element to hold icon and content.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('nav-hotspot');

      // Create icon element
      var icon = document.createElement('img');
      if ("icon" in hotspot) {
        icon.src = 'img/' + hotspot.icon;
      } else {
        icon.src = 'img/play.png';
      }
      icon.classList.add('nav-hotspot-icon');

      // Create content elements
      var content = document.createElement('div');
      content.classList.add('nav-content');

      var targets = app_data.stairs[hotspot.target].target;
      var ul = document.createElement('ul');
      targets.filter(target => target != scene.id).forEach(target => {
        var li = document.createElement('li');
        li.innerHTML = (
          findSceneDataById(scene.id).level != findSceneDataById(target).level
            ? '[' + findSceneDataById(target).level + '] '
            : ''
        ) + findSceneDataById(target).name;
        // Add click event handler.
        li.addEventListener('click', function () {
          switchScene(findSceneById(target), scene);
        });
        ul.appendChild(li);
      });
      content.appendChild(ul);

      stopTouchAndScrollEventPropagation(wrapper);
      wrapper.appendChild(icon);
      wrapper.appendChild(content);
      return wrapper;
    }

  };

  // Create scenes.
  var scenes = app_data.scenes.map(function (scene_data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + scene_data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + scene_data.id + "/preview.jpg" });
    var levels = [
      { "tileSize": 256, "size": 256, "fallbackOnly": true },
      { "tileSize": 512, "size": 512 },
      { "tileSize": 512, "size": 1024 },
      { "tileSize": 512, "size": 2048 }];
    var geometry = new Marzipano.CubeGeometry(levels);

    var faceSize = 1520;
    var limiter = Marzipano.RectilinearView.limit.traditional(faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
    var view = new Marzipano.RectilinearView(90 * Math.PI / 180, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create hotspots.
    scene_data.hotspots.forEach(function (hotspot) {
      var element = createHotspot[hotspot.type](hotspot, scene_data);
      var opts = {};
      if (hotspot.opts) {
        opts = hotspot.opts;
      }
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw * Math.PI / 180, pitch: hotspot.pitch * Math.PI / 180 }, opts);
    });

    return {
      data: scene_data,
      scene: scene,
      view: view
    };
  });

  // Set up autorotate, if enabled.
  var autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI / 2
  });
  if (settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function () {
      screenfull.toggle();
    });
    screenfull.on('change', function () {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  // Set handler for scene list toggle.
  sceneListToggleElement.addEventListener('click', toggleSceneList);

  // Start with the scene list open on desktop.
  if (!document.body.classList.contains('mobile')) {
    //showSceneList();
  }

  // Set handler for scene switch.
  scenes.forEach(function (scene) {
    var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
    el.addEventListener('click', function () {
      switchScene(scene);
      // On mobile, hide scene list after selecting a scene.
      // if (document.body.classList.contains('mobile')) {
      //   hideSceneList();
      // }
      hideSceneList();
    });
  });

  // DOM elements for view controls.
  var viewUpElement = document.querySelector('#viewUp');
  var viewDownElement = document.querySelector('#viewDown');
  var viewLeftElement = document.querySelector('#viewLeft');
  var viewRightElement = document.querySelector('#viewRight');
  var viewInElement = document.querySelector('#viewIn');
  var viewOutElement = document.querySelector('#viewOut');

  // Dynamic parameters for controls.
  var velocity = 0.7;
  var friction = 3;

  // Associate view controls with elements.
  var controls = viewer.controls();
  controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
  controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
  controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
  controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
  controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
  controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }


  function getInitialViewParameters(scene, source) {
    var viewParameters = null;
    if (source) {
      var originId = source.id;
      scene.data.hotspots.forEach(h => {
        if (h.type == "nav") {
          h.target.forEach(t => {
            if (t == originId && viewParameters == null) {
              viewParameters = { "pitch": h.pitch * Math.PI / -180, "yaw": ((h.yaw + 180) % 360) * Math.PI / 180 };
            }
          })
        } else {
          app_data.stairs[h.target].target.forEach(t => {
            if (t == originId && viewParameters == null) {
              viewParameters = { "pitch": h.pitch * Math.PI / -180, "yaw": ((h.yaw + 180) % 360) * Math.PI / 180 };
            }
          });
        }
      });
    } else if (scene.data.initialViewParameters) {
      viewParameters = scene.data.initialViewParameters;
    }

    if (viewParameters == null) {
      viewParameters = { "pitch": 0, "yaw": 0, };
    }

    return viewParameters
  }

  function switchScene(scene, source = null) {

    // set initial view parameters
    // if we have a source scene, we invert the camera from the hotspot leading to the room we come from
    var initialViewParameters = getInitialViewParameters(scene, source);
    stopAutorotate();
    scene.view.setParameters(initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);
    updateSceneList(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function updateSceneList(scene) {
    for (var i = 0; i < sceneElements.length; i++) {
      var el = sceneElements[i];
      if (el.getAttribute('data-id') === scene.data.id) {
        el.classList.add('current');
      } else {
        el.classList.remove('current');
      }
    }
  }

  function showSceneList() {
    sceneListElement.classList.add('enabled');
    sceneListToggleElement.classList.add('enabled');
  }

  function hideSceneList() {
    sceneListElement.classList.remove('enabled');
    sceneListToggleElement.classList.remove('enabled');
  }

  function toggleSceneList() {
    sceneListElement.classList.toggle('enabled');
    sceneListToggleElement.classList.toggle('enabled');
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
      'wheel', 'mousewheel'];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function (event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < app_data.scenes.length; i++) {
      if (app_data.scenes[i].id === id) {
        return app_data.scenes[i];
      }
    }
    return null;
  }

  // Éditeur : print les coordonnées dans la console sur un appui long
  hammerMouse.manager().add(new Hammer.Press({}));
  hammerMouse.on('press', showMarkerCommentModal);
  var markerCoordinates = null;

  function showMarkerCommentModal(e) {
    markerCoordinates = viewer.view().screenToCoordinates(e.center);
    var y = Math.round(markerCoordinates.yaw * 18000 / Math.PI) / 100;
    var p = Math.round(markerCoordinates.pitch * 18000 / Math.PI) / 100;
    var readable = `
    {
      "type": "stairs",
      "yaw": ${y},
      "pitch": ${p},
      "rotation": 0,
      "target": "str-sud"
    },`;
    navigator.clipboard.writeText(readable);
    console.log(readable)

  }

  // Display the initial scene.
  if (settings.firstScene && settings.firstScene != "") {
    switchScene(findSceneById(settings.firstScene));
  } else {
    switchScene(scenes[0]);
  }

})();
