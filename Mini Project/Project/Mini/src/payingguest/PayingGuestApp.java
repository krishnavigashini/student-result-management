package payingguest;
import java.util.*;
abstract class Operations
{
	protected static DatabaseHandler dbHandler = new DatabaseHandler();
	abstract void performUserRegistration();
    abstract void performUserLogin();
}
class Registration extends Operations{
    private static Scanner scanner = new Scanner(System.in);
    private static DatabaseHandler dbHandler = new DatabaseHandler();
@Override
     void performUserRegistration() {
        System.out.println("Enter username: ");
        String username = scanner.nextLine();
        System.out.println("Enter password: ");
        String password = scanner.nextLine();

        User user = new User(username, password);
        dbHandler.registerUser(user);
        System.out.println("Registration successful!");
    }
@Override
    void performUserLogin() {
        System.out.println("Enter username: ");
        String username = scanner.nextLine();
        System.out.println("Enter password: ");
        String password = scanner.nextLine();

        boolean loginSuccess = dbHandler.loginUser(username, password);
        if (loginSuccess) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Invalid username or password. Please try again.");
        }
    }
}
class Crud extends Registration
{
	private static Scanner scanner = new Scanner(System.in);
    private static DatabaseHandler dbHandler = new DatabaseHandler();
    protected static void performSearchPG() {
        System.out.println("Enter gender (Male/Female): ");
        String gender = scanner.nextLine();

        List<PayingGuest> pgList = dbHandler.searchPGByGender(gender);
        if (!pgList.isEmpty()) {
            System.out.println("Matching PGs:");
            for (PayingGuest pg : pgList) {
                System.out.println("PG ID: " + pg.getPgId());
                System.out.println("PG Name: " + pg.getPgName());
                System.out.println("PG Type: " + pg.getPgType());
                System.out.println("---------------------------");
            }
        } else {
            System.out.println("No PGs found for the given gender.");
        }
    }

    protected static void performAddPG() {
        System.out.println("Enter PG Name: ");
        String pgName = scanner.nextLine();
        System.out.println("Enter Gender (Male/Female): ");
        String gender = scanner.nextLine();

        PayingGuest pg = new PayingGuest(0, pgName, gender);
        dbHandler.addPayingGuest(pg);
        System.out.println("PG details added successfully!");
    }

    protected static void performDeletePG() {
        System.out.println("Enter PG ID to delete: ");
        int pgId = scanner.nextInt();
        scanner.nextLine();

        dbHandler.deletePayingGuest(pgId);
        System.out.println("PG with ID " + pgId + " deleted successfully!");
    }
}
class PayingGuestApp extends Crud
{
	private static Scanner scanner = new Scanner(System.in);
    private static DatabaseHandler dbHandler = new DatabaseHandler();
	public static void main(String[] args) {
        boolean exit = false;
 Crud c=new Crud();
        while (!exit) {
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Search PG");
            System.out.println("4. Admin - Add PG");
            System.out.println("5. Admin - Delete PG");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    c.performUserRegistration();
                    break;
                case 2:
                    c.performUserLogin();
                    break;
                case 3:
                    c.performSearchPG();
                    break;
                case 4:
                    c.performAddPG();
                    break;
                case 5:
                    c.performDeletePG();
                    break;
                case 6:
                    exit = true;
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
                    break;
            }
        }

        System.out.println("Goodbye!");
    }
}