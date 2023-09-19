# cheat SVG rendering

<https://css-tricks.com/svg-path-syntax-illustrated-guide/>

<https://svg-path-visualizer.netlify.app/#M140%2020C73%2020%2020%2074%2020%20140c0%20135%20136%20170%20228%20303%2088-132%20229-173%20229-303%200-66-54-120-120-120-48%200-90%2028-109%2069-19-41-60-69-108-69z>

```
<svg class="icon  icon--plus" viewBox="0 0 558 558" xmlns="http://www.w3.org/2000/svg">
<path d=”
    M 274.000 522.000
    L 285.516 537.749
    L 295.615 521.056
    L 308.459 535.741
    L 317.065 518.232
    L 331.140 531.742
    L 338.187 513.550
    L 353.386 525.781
    L 358.821 507.044
    L 375.028 517.904
    L 378.809 498.764
    L 395.902 508.171
    L 398.000 488.774
    L 415.847 496.655
    L 416.247 477.150
    L 434.713 483.445
    L 433.411 463.979
    L 452.356 468.641
    L 449.362 449.362
    L 468.641 452.356
    L 463.979 433.411
    L 483.445 434.713
    L 477.150 416.247
    L 496.655 415.847
    L 488.774 398.000
    L 508.171 395.902
    L 498.764 378.809
    L 517.904 375.028
    L 507.044 358.821
    L 525.781 353.386
    L 513.550 338.187
    L 531.742 331.140
    L 518.232 317.065
    L 535.741 308.459
    L 521.056 295.615
    L 537.749 285.516
    L 522.000 274.000
    L 537.749 262.484
    L 521.056 252.385
    L 535.741 239.541
    L 518.232 230.935
    L 531.742 216.860
    L 513.550 209.813
    L 525.781 194.614
    L 507.044 189.179
    L 517.904 172.972
    L 498.764 169.191
    L 508.171 152.098
    L 488.774 150.000
    L 496.655 132.153
    L 477.150 131.753
    L 483.445 113.287
    L 463.979 114.589
    L 468.641 95.644
    L 449.362 98.638
    L 452.356 79.359
    L 433.411 84.021
    L 434.713 64.555
    L 416.247 70.850
    L 415.847 51.345
    L 398.000 59.226
    L 395.902 39.829
    L 378.809 49.236
    L 375.028 30.096
    L 358.821 40.956
    L 353.386 22.219
    L 338.187 34.450
    L 331.140 16.258
    L 317.065 29.768
    L 308.459 12.259
    L 295.615 26.944
    L 285.516 10.251
    L 274.000 26.000
    L 262.484 10.251
    L 252.385 26.944
    L 239.541 12.259
    L 230.935 29.768
    L 216.860 16.258
    L 209.813 34.450
    L 194.614 22.219
    L 189.179 40.956
    L 172.972 30.096
    L 169.191 49.236
    L 152.098 39.829
    L 150.000 59.226
    L 132.153 51.345
    L 131.753 70.850
    L 113.287 64.555
    L 114.589 84.021
    L 95.644 79.359
    L 98.638 98.638
    L 79.359 95.644
    L 84.021 114.589
    L 64.555 113.287
    L 70.850 131.753
    L 51.345 132.153
    L 59.226 150.000
    L 39.829 152.098
    L 49.236 169.191
    L 30.096 172.972
    L 40.956 189.179
    L 22.219 194.614
    L 34.450 209.813
    L 16.258 216.860
    L 29.768 230.935
    L 12.259 239.541
    L 26.944 252.385
    L 10.251 262.484
    L 26.000 274.000
    L 10.251 285.516
    L 26.944 295.615
    L 12.259 308.459
    L 29.768 317.065
    L 16.258 331.140
    L 34.450 338.187
    L 22.219 353.386
    L 40.956 358.821
    L 30.096 375.028
    L 49.236 378.809
    L 39.829 395.902
    L 59.226 398.000
    L 51.345 415.847
    L 70.850 416.247
    L 64.555 434.713
    L 84.021 433.411
    L 79.359 452.356
    L 98.638 449.362
    L 95.644 468.641
    L 114.589 463.979
    L 113.287 483.445
    L 131.753 477.150
    L 132.153 496.655
    L 150.000 488.774
    L 152.098 508.171
    L 169.191 498.764
    L 172.972 517.904
    L 189.179 507.044
    L 194.614 525.781
    L 209.813 513.550
    L 216.860 531.742
    L 230.935 518.232
    L 239.541 535.741
    L 252.385 521.056
    L 262.484 537.749
    L 274.000 522.000
  Z ” />
  <circle cx="274" cy="234" r="50" fill="white" />
</svg>
```

| CMD      | PARAM | HELP                                                                                                      |
| -------- | ----- | --------------------------------------------------------------------------------------------------------- |
| M        | x,y   | Move to the absolute coordinates x,y                                                                      |
| m        | x,y   | Move to the right x and down y (or left and up if negative values)                                        |
| L        | x,y   | Draw a straight line to the absolute coordinates x,y                                                      |
| l        | x,y   | Draw a straight line to a point that is relatively right x and down y (or left and up if negative values) |
| H        | x     | Draw a line horizontally to the exact coordinate x                                                        |
| h        | x     | Draw a line horizontally relatively to the right x (or to the left if a negative value)                   |
| V        | y     | Draw a line vertically to the exact coordinate y                                                          |
| v        | y     | Draw a line vertically relatively down y (or up if a negative value)                                      |
| Z (or z) |       | Draw a straight line back to the start of the path                                                        |

## <https://www.smiffysplace.com/stars.html>

- Outer radius (pixels): 264
- Inner radius (pixels) : 248
- Points: 72
- X coordinate of start point: 274
- Y coordinate of start point: 274