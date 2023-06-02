# Cheat Logitech

- <https://sslaia.blogspot.com/2020/06/how-to-solve-reversed-fn-key-on.html>

## Cheat K380

- First install gcc and make. On Ubuntu run: `sudo apt install gcc make`

- Download installation files <https://github.com/jergusg/k380-function-keys-conf/releases/> (Source code).

- Connect your K380 keyboard via bluetooth to your computer.

- Run `sudo make install`

- Run `sudo dmesg | grep hidraw`. Locate K380 hidraw number.

- To switch keyboard's upper keys to F-keys run: `sudo k380_conf -d /dev/hidraw2 -f on`
