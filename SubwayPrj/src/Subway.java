import java.util.Scanner;

public class Subway {

    //지하철은 4(0,1,2,3)개의 객차를 가지고 있다.
    //4개의 방에는 4명의 사람들이 탈 수 있다.
    //그 사람들은 각자의 목적지를 가지고 있다.
    private String[][] pasCar = new String[4][4];					    //Subway는 pasCar(객차) 4개를 가지고 있다.
    private int curStation;											    //Subway가 정차하고 있는 역을 나타낸다. stations의 요소로 표시하기 위해 type을 int로
    private String[] stations = {"합정", "홍대입구", "신촌", "이대", "아현"};	//Subway가 정차할 역을 나타낸다.
    private int pasCarNum;											    //입력받을 pasCar번호
    private int desNum;												    //입력받을 destination번호

    public Subway() {
        for(int i=0; i<4; i++)
            for(int j=0; j<4; j++)
                pasCar[i][j] = "";	//Subway의 객체 생성시 객차의 목적지는 빈 값으로 초기화한다.

        curStation = 0;				//Subway의 현재 역은 stations[0]인 합정이다.
    }

    public int getCurStation() {			//getter
        return curStation;
    }

    public String[] getStations() {			//getter
        return stations;
    }


    //지하철 탑승하기 서비스
    //4개 객차의 목적지가 적혀있는지 확인한다.
    //적혀져 있지 않고 ""일 경우, 탑승가능
    //목적지가 적혀 있을 경우, 탑승 불가
    public void join() {
        Scanner scan = new Scanner(System.in);

        System.out.println();
        System.out.println("---- 탑승가능 현황 ----");
        for(int i=0; i<4; i++) {										//passengerCar의 번호의 빈 좌석을 확인한다.
            System.out.printf("%d호차 : ", i+1);
            if(checkEmptySeats(i)==true)								//checkEmptySeats이 true일 경우, 가능으로 표시하고 false일 경우 불가능으로 표시한다.
                System.out.println("가능");
            else if(checkEmptySeats(i)==false)
                System.out.println("불가능");
        }
        System.out.println();
        System.out.println(">>어느 호차에 탑승하시겠습니까?");
        for(int i=0; i<4; i++)
            System.out.printf("(%d) %d호차 ", i+1, i+1);					//호차의 목록을 나타낸다.		>> 불가능한 호차를 보여주지 말자
        System.out.println();
        pasCarNum = scan.nextInt()-1;

        System.out.println();
        System.out.println(">>목적지를 선택해 주세요.");						//stations의 목록을 보여준다.
        for(int i=0; i<5; i++)
            System.out.printf("(%d) %s ", i+1, stations[i]);

        desNum = scan.nextInt()-1;
        if(stations[curStation]==stations[desNum])
            System.out.println("현재 정차한 역입니다.");
        else {
            for(int i=0; i<4; i++) {
                if(pasCar[pasCarNum][i]=="") {
                    pasCar[pasCarNum][i] = stations[desNum];
                    break;
                }
            }
        }
    }
    //빈 좌석인지 확인하는 함수
    public boolean checkEmptySeats(int i) {	//객차의 번호를 i로 받는다.
        int emptySeats = 4;					//처음에는 빈 좌석이 한 객차에 4개
        for(int j=0; j<4; j++)
            if(pasCar[i][j]!="")			//passengerCar에 목적지가 적힐 경우, 즉 빈 값이 아닐 경우
                emptySeats--;				//빈 좌석은 줄어든다.
        if(emptySeats==0)					//빈 좌석이 계속 줄어들다가 0이 되었을 경우, false반환
            return false;

        return true;						//passengerCar의 값이 비어있을 경우 true변환
    }
    //객차 상황을 보여주는 함수
    public void status() {					//Subway의 현 상황을 보여준다.
        for(int i=0; i<4; i++) {
            System.out.printf("%d호차 : ", i+1); 				
            for(int j=0; j<4; j++) {
                if(pasCar[i][j]=="")
                    System.out.printf("[%-4s]", "빈 좌석");
                else
                    System.out.printf("[%-4s]", pasCar[i][j]);
            }
            System.out.println();
        }
    }

    public void move() {

        curStation++;
        System.out.printf("cur: %d",curStation);

        if(curStation==5)
            curStation = 0;

        for(int i=0; i<4; i++) {
            for(int j=0; j<4; j++) {
                if(stations[curStation] == pasCar[i][j])
                    pasCar[i][j] = "";
            }
        }
    }
}

