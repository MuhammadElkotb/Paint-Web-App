package Filter;

import java.util.ArrayList;
import java.util.List;


//STEP 3: BUILD THE CONCRETE CLASSES THAT IMPLEMENTS INTERFACE
//THIS CLASS IS USED TO JOIN TWO FILTERS BY LOGICAL OR
public class OrCriteria implements Criteria{
	private Criteria criteria;
	private Criteria criteria2;
	
	public OrCriteria(Criteria criteria, Criteria criteria2) {
		super();
		//looks as interfaces but each is implemented by one of the 4 concrete classes
		//so by calling meetCriteria, they act as implemented in classes
		this.criteria = criteria;
		this.criteria2 = criteria2;
	}
	
	public List<Person> meetCriteria (List<Person> people){
		List <Person> CriteriaPeople = criteria.meetCriteria(people);
		List <Person> Criteria2People = criteria2.meetCriteria(people);
		for (Person p : Criteria2People) {
			if (!CriteriaPeople.contains(p)) {
				CriteriaPeople.add(p);
			}
		}
		return CriteriaPeople;
		
	}

}