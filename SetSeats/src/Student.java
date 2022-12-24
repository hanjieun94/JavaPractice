public class Student {

    public int id;
    public String name;

    public void print() {
        System.out.printf("%d, %s\n", id, name);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}