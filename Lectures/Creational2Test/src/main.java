
public class main {
	public static void main(String args[]) throws CloneNotSupportedException{
		BookShop bs = new BookShop();
		bs.setShopName("Novelty");
		bs.loadData();
		
		BookShop bs1 =  bs.clone(); 

		bs1.setShopName("Novelty2");
		//bs1.loadData(); the long way without using prototype pattern
		bs.getBooks().remove(2);
		System.out.println(bs);
		System.out.println(bs1);

	}
}
