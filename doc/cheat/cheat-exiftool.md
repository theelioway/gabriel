# cheat exiftag

```
# view tags with parameted names
exiftool $f -s
exiftool . -w json -json

exiftool -w %f.%c.EXIF.JSON -json $MEDIO
find . -type d -empty -delete
find . -type f -name "*.EXIF.JSON" -delete

exiftool -Rating=5 $MEDIO
exiftool -artist="Yippee" $MEDIO

exiftool '-FileName<${CreateDate}-DSC_${ShutterCount}.JPG' -d %Y-%m-%d **.JPG

for MEDIA in (find . -name "DSC_*.JPG")
    echo $MEDIA
    set FileNumber (exifish FileNumber DSC_0318.JPG)
    set OUTED "THUMB_"$FileNumber".JPG"
    exiftool -b -ThumbnailImage $MEDIA > $OUTED
    echo "outted "$OUTED
end


jq '.[] | {rating: .Rating, name: .FileName}' 2022-07-18-DSC_8164.3.EXIF.JSON

jq '.[].Rating' 2022-07-18-DSC_8164.3.EXIF.JSON
```

```
# exifish.fish
function exifish
  set SPLARGS (string split " " $argv)
  echo (string split ": " (exiftool $SPLARGS[2] -s -$SPLARGS[1]))[2]
end
```

```
for IMG in (ls)
  set SPLITTED (string split "/" $IMG)
  set DIR (string join "/" $SPLITTED[1..-2])
  set FN (exifish FileNumber $IMG)
  set MAKE (exifish Make $IMG)
  set MODEL (string join "" (string split " " (string upper (exifish Model $IMG))))
  if test $FN
    if test (string match -e "NIKON" $MAKE)
      set RENAMED $DIR"/"$MODEL"_"$FN".JPG"
      mv $IMG $RENAMED
      echo $RENAMED
    end
  end
end
```
