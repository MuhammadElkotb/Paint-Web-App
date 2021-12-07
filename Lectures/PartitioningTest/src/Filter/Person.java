package Filter;
//STEP 1: Build your main object class
public class Person {
	private String name;
	private String gender;
	private String martialStatus;
	public Person(String name, String gender, String martialStatus) {
		super();
		this.name = name;
		this.gender = gender;
		this.martialStatus = martialStatus;
	}
	public String getName() {
		return name;
	}
	public String getGender() {
		return gender;
	}
	public String getMartialStatus() {
		return martialStatus;
	}
	@Override
	public String toString() {
		return "Person : [name=" + name + ", gender=" + gender + ", martialStatus=" + martialStatus + "]";
	}
	
	
}
	
	
