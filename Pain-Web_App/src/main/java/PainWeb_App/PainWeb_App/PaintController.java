package PainWeb_App.PainWeb_App;

import org.glassfish.jersey.message.internal.StringHeaderProvider;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.POST;
import javax.xml.parsers.SAXParser;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@Component
public class PaintController {
    ShapeClass shape = new ShapeClass();
    Factory factory = new Factory();



    @PostMapping("/paint")
    ShapeClass addShapes(@RequestBody ShapeClass paintShape){

        shape.addShape(paintShape);
        System.out.println(shape.getShape(shape.getListofShapes().size() - 1).getX());
        System.out.println(shape.getShape(shape.getListofShapes().size() - 1).getY());
        System.out.println(paintShape.getType());
        System.out.println(shape.getListofShapes().size());
        System.out.println(paintShape.getShapeID());
        return  paintShape;
    }

    @PostMapping("/create")
    ShapeClass createShape(@RequestBody String type){


        return factory.createShape(type);
    }

    @GetMapping("/canvas")
    List<ShapeClass> canvas(){
        return shape.getListofShapes();
    }

    @PostMapping("/remove")
    List<ShapeClass> removeShape(@RequestBody ShapeClass removeShape){

        for(int i = 0; i < shape.getListofShapes().size(); i++){
            if(shape.getListofShapes().get(i).getShapeID().equals(removeShape.getShapeID())){
                System.out.println("removed");
                shape.getListofShapes().remove(i);
            }
        }
        System.out.println("delte");
        System.out.println(removeShape.getShapeID());
        System.out.println(shape.getListofShapes().get(0).getShapeID());
        return shape.getListofShapes();

    }

    @PostMapping("/edit")
    void editShape(@RequestBody ShapeClass newShape){
        for(int i = 0; i < shape.getListofShapes().size(); i++) {
            if (shape.getListofShapes().get(i).getShapeID() == newShape.getShapeID()) {
                shape.setFiCo(newShape.getFiCo());
                shape.setFilled(newShape.isFilled());
                shape.setHeight(newShape.getHeight());
                shape.setWidth(newShape.getWidth());
                shape.setX(newShape.getX());
                shape.setY(newShape.getY());
                shape.setStCo(newShape.getStCo());
                shape.setType(newShape.getType());
                shape.setStWi(newShape.getStWi());
            }
        }
        System.out.println(newShape.getFiCo());
    }


}
