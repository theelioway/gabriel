# Cheat Python

## ls

```
# count
ls | wc -l
```

## pprint

```
import pprint
pp = pprint.PrettyPrinter(indent=4, compact=True)
```

## os

```
# Nutshell
for r, d, f in os.walk(dir):
  for file in f:
    os.path.join(r, file)
  for dirt in d:
    os.path.join(r, dirt)

walk_into = "/home/tim/repo/"
for root, dirs, files in os.walk(walk_into):
    for file in files:
        fullPath = os.path.join(root, file)
        fileName = os.path.split(fullPath)[1]
        assert file = fileName
        fileNameNoExt = os.path.splitext(fileName)[0]
        ext = os.path.splitext(fileName)[-1]
        appRoot = os.getcwd()

copyto_path = os.fspath(Path("/this/is/part/1" + "/this/is/part/2"))
if not os.path.exists(copyto_path):
    os.makedirs(copyto_path)
os.remove(os.path.join(copyto_path, "artwork.yaml"))


walk_into = "/home/tim/Music/"
for targ_root, targ_dirs, targ_files in os.walk(walk_into):
    for file in targ_files:
        if "folder.jpg" in file:
            match_path = os.path.join(*targ_root.split("/")[-2:])
            src_walk_into = "/home/tim/Downloads/MP3s"
            for src_root, src_dirs, src_files in os.walk(src_walk_into):
                for file in src_files:
                    if match_path in src_root:
                        src_full = os.path.join(src_root, file)
                        targ_full = os.path.join(targ_root, file)
                        shutil.move(src_full, targ_full)
```

## shutil

```
import os
import shutil

walk_into = "/home/tim/Music/"
for root, dirs, files in os.walk(walk_into):
    for file in files:
        if "folder.jpg" in file:
            fullPath = os.path.join(root, file)
            artistAlbum = os.path.split(fullPath)
            match_path = os.path.join(*root.split("/")[-2:])
            copyto_path = root.replace("/Music/", "/Videos/")
            if not os.path.exists(copyto_path):
                os.makedirs(copyto_path)
            shutil.copy2(fullPath, os.path.join(copyto_path, file))
            shutil.move(fullPath, os.path.join(copyto_path, file))
```

## open

```python
my_data_file = open('data.txt', 'w')
my_data_file.write("Hello World")
my_data_file.close()

with open('data.txt', 'w') as my_data_file:
  web_browsers = ['Firefox\n', 'Chrome\n', 'Edge\n']
  f.writelines(web_browsers)
```

## csv

```python
import csv
head = ['First', 'Last', 'Age', 'Level', 'Approach']
rows = [
  ['Tim', 'Bushell', '53', 'Ace', 'Carefully'],
  ['Erin', 'Holder', '34', 'Genuis', 'Never']
]
with open('people.csv', 'w') as csv_file:
    csv_writer = csv.writer(csv_file, delimiter=',')
    csv_writer.writerow(head)
    for row in rows:
        csv_writer.writerow(row)
res = []
with open('people.csv', 'r') as csv_file:
    csv_reader = csv.reader(csvfile, delimiter=",", quotechar='"')
    head = csv_reader.next()
    for csvrow in csv_reader:
        res.append(dict(first=csvrow[0], last=csvrow[1], age=csvrow[2]))
```

## json

```python
import json

my_details = {
'name': 'John Doe',
'age': 29
}

with open('personal.json', 'w') as json_file:
  json.dump(my_details, json_file, indent=4)

with open('personal.json', 'r') as json_file:
  my_details = json.load(json_file)
```

## date

```python
from datetime import date, datetime, timedelta
from datetime import date, datetime, timedelta
dt = date.today()
dt = datetime.now()
dt = date(2020, 6, 6)
dt = datetime(2020, 6, 6, 9, 30, 0) + timedelta(weeks=3)
```

## sorted

```python
x = [{"name": "B", "age": 40}, {"name": "C", "age": 10}, {"name": "A", "age": 30}]
y = sorted(x, key=lambda item: item["name"], reverse=True)
y = sorted(x, key=lambda item: (item["name"], item["age"]))

# reverse a string or array
'esrever'[::-1]
[5,2,3,4,1][::-1]
```

## logging

```python
import logging
logging.debug("This gets logged")
logging.info("This doesn't gets logged")
logging.warning("This doesn't gets logged")
logging.error("This doesn't gets logged")
logging.critical("This doesn't gets logged")
logging.basicConfig(
  level=logging.DEBUG, # INFO, WARNING, ERROR, CRITICAL
  filename="/home/user/Stuff/Activity/log.txt"
)
logging.debug("This gets logged")
logging.info("This doesn't gets logged")
logging.warning("This doesn't gets logged")
logging.error("This doesn't gets logged")
logging.critical("This doesn't gets logged")
logging.basicConfig(
  level=logging.WARNING, # INFO, WARNING, ERROR, CRITICAL
  filename="/home/user/Stuff/Activity/log.txt"
)
logging.debug("This gets logged")
logging.info("This gets logged")
logging.warning("This gets logged")
logging.error("This doesn't gets logged")
logging.critical("This doesn't gets logged")
```
