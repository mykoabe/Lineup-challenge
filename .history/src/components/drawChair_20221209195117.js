import Konva from'konva'

export function drawChair(shapeParams, width=20, height=24, fill='#f0f0f0', stroke='#698765', strokeWidth=1, opacity=1, xPos=(shapeParams.innerWidth / 2) - 10, yPos=(shapeParams.innerHeight / 2) - 10, prevRotation=0, rotation=0, scaleX=1, scaleY=1) {

    const group = new Konva.Group({
        x: xPos,
        y: yPos,
        width: width,
        height: height,
        draggable: true,
        id: "chair",
        prevRotation: prevRotation,
        rotation: rotation,
        scaleX: scaleX,
        scaleY: scaleY
    })

    const chair = new Konva.Rect({
        width: 20,
        height: 20,
        fill: fill,
        stroke: stroke,
        strokeWidth: strokeWidth,
        opacity: opacity,
        strokeScaleEnabled: false,
        name: "rect"
    })

    const back = new Konva.Rect({
        width: 20,
        height: 4,
        fill: '#D3D3D3',
        name: "rect"
    })

    group.add(chair, back) // add the shape to the layer
    group.on('click tap', shapeParams.transformSize) // add click event
    group.on('mouseup', shapeParams.dragElement) // add drag event
    group.on('mouseleave', () => {
        shapeParams.stage.setAttr('cursor', 'default')
    })

    shapeParams.layer.add(group) // add the layer to the stage
    shapeParams.layer.draw()
}
