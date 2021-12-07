import java.util.ArrayList;
import java.util.List;


public class BookShop implements Cloneable {
	private String shopName;
	List<Book> Books = new ArrayList<>();
	public String getShopName() {
		return shopName;
	}
	public void setShopName(String shopName) {
		this.shopName = shopName;	
	}
	public List<Book> getBooks() {
		return Books;
	}
	public void setBooks(List<Book> books) {
		Books = books;
	}
	
	//loads initial value of object from database
	public void loadData() {
		for (int i=0;i<11;i++) {
			Book b = new Book();
			b.setBid(i);
			b.setBname("Book " + i);
			getBooks().add(b);
		}
	}/* Shallow clone ... second object is affected by first object change
	protected Object clone() throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		return super.clone();
	}*/
		
	//Deep clone ... 2nd takes 1st values and not affected by its change
	@Override
	protected BookShop clone() throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		BookShop shop = new BookShop();
		for (Book b : this.getBooks()) {
			shop.getBooks().add(b);
		}
		return shop;
	}
	@Override
	public String toString() {
		return "BookShop [shopName=" + shopName + ", Books=" + Books + "]";
	}
	
	
	
	

	
	
}
