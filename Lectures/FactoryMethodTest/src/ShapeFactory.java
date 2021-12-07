import java.lang.String;
//STEP 3: CREATE FACTORY TO SPECIFY DESIRED CLASS
public class ShapeFactory {
	//this class is a factory class that chooses which class we should return according to shape
	public Shape getShape(String shapeType) {
	if (shapeType == null)
		return null;
	if (shapeType.equalsIgnoreCase("CIRCLE")) 
		//instead of returning interface time we can return a class that implements it
		return new Circle();
	else if (shapeType.equalsIgnoreCase("RECTANGLE")) 
		return new Rectangle();
	else if (shapeType.equalsIgnoreCase("SQUARE")) 
		return new Square();
	else
		return null;
	}
}
