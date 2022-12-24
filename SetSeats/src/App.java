import java.io.IOException;

public class App {

    public static void main(String[] args) throws IOException {

        //#12

        //Room클래스의 객체(room) 생성
        Room room = new Room();

        //객체room의 load함수 호출
        room.load("res/students.txt");

        //객체room의 shuffle함수 호출
        room.shuffle();

        //객체room의 print함수 호출
        room.print();

        //객체room의 sort함수 호출
        room.sort();
        System.out.println();
        room.print();


    }

}
