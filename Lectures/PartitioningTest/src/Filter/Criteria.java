package Filter;
import java.util.List;
//STEP 2: BUILD YOUR CRITERIA INTERFACE
public interface Criteria {
	public List<Person> meetCriteria (List<Person> people);
	//RETURNS LIST BY DEFAULT
}
