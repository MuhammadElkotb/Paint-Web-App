package Filter;

import java.util.ArrayList;
import java.util.List;

public class CriteriaDemo {
	public static void main(String a[]) {
		List <Person> people =  new ArrayList<>();
		
		people.add(new Person ("Joe"  ,"male"  ,"taken"));
		people.add(new Person ("Mona" ,"female","taken"));
		people.add(new Person ("fedo" ,"male"  ,"single"));
		people.add(new Person ("H"    ,"male"  ,"single"));
		people.add(new Person ("Meezo","male"  ,"taken"));
		people.add(new Person ("Nada" ,"female","taken"));
		
		Criteria male = new CriteriaMale();
		Criteria female = new CriteriaFemale();	
		Criteria single = new CriteriaSingle();
		Criteria taken = new CriteriaTaken();
		Criteria singleMales = new AndCriteria(male,single);
		Criteria singleOrFemale = new OrCriteria(single,female);
		
		System.out.print("\nMales:\n");
		printPeople(male.meetCriteria(people));

		System.out.print("\nFemales:\n");
		printPeople(female.meetCriteria(people));

		System.out.print("\nSingle:\n");
		printPeople(single.meetCriteria(people));

		System.out.print("\nTaken:\n");
		printPeople(taken.meetCriteria(people));

		System.out.print("\nSingle Males:\n");
		printPeople(singleMales.meetCriteria(people));

		System.out.print("\nFemales or Single:\n");
		printPeople(singleOrFemale.meetCriteria(people));
		
	}
	
	public static void printPeople(List <Person> p) {
		for (Person p1 : p) {
			System.out.println(p1.toString());
		}
	}
		

}
