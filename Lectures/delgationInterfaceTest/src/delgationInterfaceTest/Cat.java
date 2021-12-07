package delgationInterfaceTest;
//if implements marker interface we get sounds ... otherwise lols which is our cat class implementation
public class Cat {//implements java.io.Serializable{
	//used delegation with interface 
	private ISoundBehaiviour sound = new MeowSound ();
	// now sound has method makeSound available
	// has it implemented using Meow
	//The next makeSound is of class cat
	public void makeSound () {
		//The next makeSound is of interface
		this.sound.makeSound();
	}
	public void setSoundBehaiviour(/*newsound is of type interface as we dk to which class it belongs*/ ISoundBehaiviour newsound ) {
		//our sound now has the same sound of the passed parameter with different interface implementation
		this.sound = newsound ;
	}
	
	public void lol() {
		System.out.println("lol");
	}
}