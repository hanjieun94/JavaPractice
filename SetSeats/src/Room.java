import java.io.FileInputStream;
import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class Room {

    private Student[] students;

    //생성자
    public Room() {
        students = new Student[10];								//students이름의 Student타입의 사이지가 10인 배열 생성
    }

    public void load(String file) throws IOException {
        //파일 읽어오기
        FileInputStream fis = new FileInputStream(file);		//FileInputStream생성
        Scanner scan = new Scanner(fis);						//Scanner생성 -> 문장 단위로 입력 가능하게 한다.

        for(int i=0; i<students.length; i++) {					//students의 길이 = 10

            //students에 Student객체 생성
            students[i] = new Student();						//students배열의 각 요소에 Student객체 생성

            String line = scan.nextLine();						//버퍼의 내용들을 문장 단위로 나누어서 입력 받아 String타입으로 저장
            String[] arr = line.split(",");						//arr[0] = 1, arr[1] =


            students[i].setId(Integer.parseInt(arr[0]));
            students[i].setName(arr[1]);

        }
        scan.close();
        fis.close();

    }

    public void shuffle() {
        Random random = new Random();
        int j = random.nextInt(10);
        Student tmp = new Student();
        for(int i=0; i<10; i++) {
            tmp = students[i];
            students[i] = students[j];
            students[j] = tmp;

        }
    }

    public void print() {
        for(int i=0; i<10; i++)
            students[i].print();

    }

    public void sort() {
        for(int i=0; i<9; i++) {
            for(int j=0; j<9-i; j++) {
                if(students[j].getId() > students[j+1].getId()) {
                    Student tmp = students[j];
                    students[j] = students[j+1] ;
                    students[j+1] = tmp;
                }
            }
        }

    }

}
