# cheat grep

```shell
touch `filelist.txt`
```

```filelist.txt
[IMG]	cover.jpg 	2022-01-03 13:04 	46K	 
[IMG]	i_002.jpg 	2022-01-03 13:04 	46K	 
[IMG]	i_061.jpg 	2022-01-03 13:04 	148K	 
[IMG]	i_067.jpg 	2022-01-03 13:04 	175K	 
[IMG]	i_071.jpg 	2022-01-03 13:04 	156K	 
[IMG]	i_083.jpg 	2022-01-03 13:04 	121K	 
[IMG]	i_086.jpg 	2022-01-03 13:04 	159K	 
[IMG]	i_090.jpg 	2022-01-03 13:04 	136K	 
[IMG]	i_105.jpg 	2022-01-03 13:04 	125K	 
[IMG]	i_108.jpg 	2022-01-03 13:04 	165K	 
[IMG]	i_116.jpg 	2022-01-03 13:04 	185K	 
[IMG]	i_129.jpg 	2022-01-03 13:04 	135K	 
[IMG]	i_134.jpg 	2022-01-03 13:04 	114K	 
[IMG]	i_141.jpg 	2022-01-03 13:04 	133K	 
[IMG]	i_146.jpg 	2022-01-03 13:04 	173K	 
[IMG]	i_150.jpg 	2022-01-03 13:04 	155K	 
[IMG]	i_153.jpg 	2022-01-03 13:04 	150K	 
[IMG]	i_157.jpg 	2022-01-03 13:04 	194K	 
[IMG]	i_164.jpg 	2022-01-03 13:04 	139K	 
[IMG]	i_171.jpg 	2022-01-03 13:04 	149K	 
[IMG]	i_177.jpg 	2022-01-03 13:04 	134K	 
[IMG]	i_180.jpg 	2022-01-03 13:04 	148K	 
[IMG]	i_189.jpg 	2022-01-03 13:04 	177K	 
[IMG]	i_194.jpg 	2022-01-03 13:04 	153K	 
[IMG]	i_210.jpg 	2022-01-03 13:04 	148K	 
[IMG]	i_212.jpg 	2022-01-03 13:04 	151K	 
[IMG]	i_217.jpg 	2022-01-03 13:04 	121K	 
[IMG]	i_220.jpg 	2022-01-03 13:04 	137K	 
[IMG]	i_223.jpg 	2022-01-03 13:04 	136K	 
[IMG]	i_228.jpg 	2022-01-03 13:04 	165K	 
[IMG]	i_236.jpg 	2022-01-03 13:04 	143K	 
[IMG]	i_246.jpg 	2022-01-03 13:04 	121K	 
[IMG]	i_250.jpg 	2022-01-03 13:04 	149K	 
[IMG]	i_253.jpg 	2022-01-03 13:04 	153K	 
[IMG]	i_255.jpg 	2022-01-03 13:04 	120K	 
[IMG]	i_257.jpg 	2022-01-03 13:04 	160K	 
[IMG]	i_277.jpg 	2022-01-03 13:04 	142K	 
[IMG]	i_282.jpg 	2022-01-03 13:04 	174K	 
[IMG]	i_284.jpg 	2022-01-03 13:04 	134K	 
[IMG]	i_288.jpg 	2022-01-03 13:04 	136K	 
[IMG]	i_303.jpg 	2022-01-03 13:04 	190K	 
[IMG]	i_312.jpg 	2022-01-03 13:04 	166K	 
[IMG]	i_319.jpg 	2022-01-03 13:04 	166K	 
[IMG]	i_326.jpg 	2022-01-03 13:04 	178K	 
[IMG]	i_331.jpg 	2022-01-03 13:04 	155K	 
[IMG]	i_334.jpg 	2022-01-03 13:04 	166K	 
[IMG]	i_339.jpg 	2022-01-03 13:04 	156K	 
[IMG]	i_357.jpg 	2022-01-03 13:04 	138K	 
[IMG]	i_371.jpg 	2022-01-03 13:04 	146K	 
[IMG]	i_374.jpg 	2022-01-03 13:04 	126K	 
[IMG]	i_386.jpg 	2022-01-03 13:04 	153K	 
[IMG]	i_396.jpg 	2022-01-03 13:04 	168K	 
[IMG]	title.jpg 	2022-01-03 13:04 	42K	

```


```shell
set gutenberg "https://www.gutenberg.org/files/67092/67092-h/images/"
for URL in (grep -oE '\S+\.jpg' filelist.txt )
    if test -f $URL
    else 
        echo $gutenberg$URL
        curl $gutenberg$URL -o $URL
    end
end
```
