{
    //solving problem 4
    const calculateShapeArea = (obj: { shape: "circle" | "rectangle"; radius?: number; width?: number; height?: number }) => {
        if (obj.shape === "circle" && obj.radius !== undefined) {
            const result = Math.PI * Math.pow(obj.radius, 2);
            return result;
        } else if (obj.shape === "rectangle" && obj.width !== undefined && obj.height !== undefined) {
            const result = obj.width * obj.height;
            return result;
        }
        return 0;
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}