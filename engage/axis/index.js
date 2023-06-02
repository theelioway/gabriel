function axis(bodyW, bodyH, gridSize) {
  const halfW = bodyW / 2,
    halfH = bodyH / 2
  return {
    H: (gridsY) => {
      gridsY = gridsY || 1
      const h = (bodyH / gridSize) * gridsY
      return Math.round(h)
    },
    W: (gridsX) => {
      gridsX = gridsX || 1
      const w = (bodyW / gridSize) * gridsX
      return Math.round(w)
    },
    X: (gridsX, obj) => {
      let objW = 0
      if (obj) objW = obj.width * obj.scaleX
      gridsX = gridsX || 0
      const w = (bodyW / gridSize) * gridsX
      return Math.round(halfW + w - objW / 2)
    },
    Y: (gridsY, obj) => {
      let objH = 0
      if (obj) objH = obj.height * obj.scaleY
      gridsY = gridsY || 0
      const h = (bodyH / gridSize) * gridsY
      return Math.round(halfH + h - objH / 2)
    },
  }
}

module.exports = axis
