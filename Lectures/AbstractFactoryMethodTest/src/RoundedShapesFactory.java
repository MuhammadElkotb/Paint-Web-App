//child of AbstractFactory that overwrites its only method
public class RoundedShapesFactory extends AbstractFactory {
	public Shape getShape(String shapeType) {
		if (shapeType.equalsIgnoreCase("RECTANGLE")) 
			return new RoundedRectangle();
		else if (shapeType.equalsIgnoreCase("SQUARE")) 
			return new RoundedSquare();
		return null;
	}
}
