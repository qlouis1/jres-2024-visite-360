# venv/bin/python
import json, hjson
from html.parser import HTMLParser
from bs4 import BeautifulSoup

# read files and convert to python object
data_file_path = "../app-files/data.js"
index_file_path = "../app-files/index.html"


def validate_data():
        # data.js
    print(f"Reading {data_file_path}")
    with open(data_file_path) as f:
        data = f.read()

    # convert from js to json
    while data[0] != "{":
        data = data[1:]

    while data[-1] != "}":
        data = data[: len(data) - 1]

    # use hjson to handle relaxed json in case we have dangling commas
    # but hjson doesn't seem to use the same data structure than json lib
    data = json.loads(json.dumps(hjson.loads(data), ensure_ascii=False))

    # Validate json
    scenes = data["scenes"]
    scene_reference = {}
    for scene in scenes:
        scene_reference[scene["id"]] = scene["name"]

    stairs = data["stairs"]


    print("Validating...")

    for id, value in stairs.items():
        for target in value["target"]:
            if target not in scene_reference.keys():
                print(f"Unknown target : {target} in stairs {id}")

    for scene in scenes:

        # manage hotspots: sort and validate data
        # we can't sort anymore as order of definition is important for z-index
        #scene["hotspots"] = sorted(scene["hotspots"], key=lambda x: x["type"])
        for hotspot in scene["hotspots"]:
            match hotspot["type"]:
                case "nav":
                    for target in hotspot["target"]:
                        if target not in scene_reference.keys():
                            print(f"Unknown target : {target} in scene {scene['id']}")
                        if target == scene["id"]:
                            print(f"Self targeting : {target} in scene {scene['id']}")
                case "stairs":
                    if hotspot["target"] not in stairs.keys():
                        print(f"Unknown stairs : {hotspot["target"]} in scene {scene['id']}")
                    else:
                        if scene['id'] not in stairs[hotspot["target"]]['target']:
                            print(f"Not in self stairs : hotspot with target {hotspot["target"]} is targeting stairs that do not include its own scene in scene {scene['id']}")
                case "link":
                    print(f"Converting link {hotspot["target"]} to nav in scene {scene['id']}")
                    hotspot['type'] = "nav"
                    hotspot['target'] = [hotspot['target']]
                    for target in hotspot["target"]:
                        if target not in scene_reference.keys():
                            print(f"Unknown target : {target} in scene {scene['id']}")
                        if target == scene["id"]:
                            print(f"Self targeting : {target} in scene {scene['id']}")
                case _:
                    print("error")

    print("Validate finished")
    # print in file
    # convert back to js
    to_print = "var APP_DATA = " + json.dumps(data, indent=2, ensure_ascii=False) + ";"

    print(f"Writing {data_file_path}")
    with open(data_file_path, "w") as f:
        f.seek(0)
        f.write(to_print)
        f.truncate()    

# def build_html():
#     # index.html
#     print(f"Reading {index_file_path}")

#     with open(index_file_path) as f:
#         index = f.read()

#     index = BeautifulSoup(index, "html.parser")
#     scene_list = index.find("ul", {"class": "scenes"})
        
#         for scene in scenes:
#             # manage index.html: set list content with names of scenes
#             i = scene_list.find("a", {"data-id": f"{scene['id']}"})
#             i.li.string.replace_with(scene_reference[scene["id"]])


# print(f"Writing {index_file_path}")
# # with open("../app-files/index-w.html", "w") as f:
# with open(index_file_path, "w") as f:
#     f.seek(0)
#     f.write(str(index))
#     f.truncate()
def main():

    validate_data()

if __name__ == "__main__":
    main()
