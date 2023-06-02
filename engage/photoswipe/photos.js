const fs = require("fs")
const glob = require("glob")
const sh = require("shelljs")
const FLICKR_FOLDER = "/home/tim/Pictures/Flickr"

let photos = []

glob(FLICKR_FOLDER + "/**/*.jpg", {}, function (err, files) {
  photos = files
  glob(FLICKR_FOLDER + "/photojays/*.json", {}, function (err, files) {
    files.forEach((photoJson) => {
      let photoJayjay = require(photoJson)
      let photoPath = photos.find((p) => p.includes(photoJayjay.id))
      if (!photoPath) {
        console.log(photoJson)
      } else {
        let photoFileName = photoPath.split("/").pop()
        let folderName = "/"
        if (photoJayjay.albums && photoJayjay.albums.length) {
          // console.log(photoJayjay.albums)
          folderName = photoJayjay.albums[0].title
        } else if (photoJayjay.tags && photoJayjay.tags.length) {
          let lensTag = photoJayjay.tags.find((t) => t.tag.endsWith("Lens"))
          if (lensTag) folderName += lensTag
          let filmTag = photoJayjay.tags.find((t) => t.tag.endsWith("Film"))
          if (filmTag) folderName += filmTag
        } else {
        }
        let moveTo = `${FLICKR_FOLDER}/Done/${folderName}`
        sh.mkdir("-p", moveTo)
        fs.rename(photoPath, `${moveTo}/${photoFileName}`, function (err) {
          if (err) {
            console.log(err)
          }
        })
      }
    })
  })
})
