# cheat gphoto2

- <http://www.gphoto.org/doc/manual/using-gphoto2.html>
- <https://www.crackedthecode.co/how-to-use-your-dslr-as-a-webcam-in-linux/>
- <https://linux.die.net/man/1/gphoto2>

## Could not claim the USB device

```
pkill -f gphoto2
```

## Install

```
sudo apt-get install vlc
sudo apt-get install gphoto2 v4l2loopback-utils v4l2loopback-dkms ffmpeg libgphoto2
```

## Usage

- <http://www.gphoto.org/doc/manual/ref-gphoto2-cli.html>
- <https://opensource.com/article/20/7/gphoto2-linux>

```
set CAMERAMODEL "Apple iPhone 5 (PTP mode)"
set CAMERAMODEL "Apple iPhone 5 (PTP mode)"
set CAMERAUSB "001,008"

gphoto2 --camera $CAMERAMODEL --summary
gphoto2 --port usb:$CAMERAUSB --summary

gphoto2 --camera $CAMERAMODEL --list-files

# List auto-detected cameras and the ports to which they are connected.
gphoto2 --auto-detect
# Connect by Port
# Files On It
gphoto2 --list-files --port usb:$CAMERAUSB
gphoto2 --get-all-files --port usb:$CAMERAUSB
# Gets the files by number in `--list-files`
gphoto2 --get-file  --port usb:$CAMERAUSB 710-718

# Display the camera and driver abilities specified in the libgphoto2 database. Use --summary to query an overview of the camera.
gphoto2 --abilities --port usb:$CAMERAUSB

--upload-file=FILENAME
# Upload a file to camera
```

## Capture Image

```
gphoto2 --capture-image-and-download --filename pic0001.jpg
```

## Time Lapse

```
gphoto2 --capture-image --port usb:$CAMERAUSB --interval 5 --hook-script /usr/share/doc/gphoto2/test-hook.sh
```

## Stream a Movie

```
gphoto2 --stdout --capture-movie | ffmpeg -i - -vcodec rawvideo -pix_fmt yuv420p -threads 0 -f v4l2 /dev/video0
```

### Three gPhoto Commands you need to know

```
gphoto2 --list-config
    --list-config will produce a listing of all configuration entries specific to and available for your camera.

gphoto2 --get-config [config]
    --get-config will list the type, the current value and the available options of a configuration value. As an example:

gphoto2 --get-config autofocusdrive
gphoto2 --quiet --set-config autofocusdrive=1


gphoto2 --get-config whitebalance
    Label: WhiteBalance
    Readonly: 0
    Type: RADIO
    Current: Auto
    Choice: 0 Auto
    Choice: 1 Daylight
    Choice: 2 Shadow
    Choice: 3 Cloudy
    Choice: 4 Tungsten
    Choice: 5 Fluorescent
    Choice: 6 Flash
    Choice: 7 Manual


gphoto2 --set-config-value [config]
    --set-config-value will set the specified configuration entry by specifying its new value. The output of — get-config will provide the values which are possible to set. Another example:

gphoto2 --set-config-value whitebalance="Daylight"
```

You can also chain multiple --set-config-value commands, to get the exact setup you're looking for:

```
gphoto2 --set-config-value whitebalance="Daylight" --set-config-value aperture="3.5"
```
