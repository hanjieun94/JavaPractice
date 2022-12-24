import java.util.Scanner;

public class Subway {

    //지하철은 4(0,1,2,3)개의 객차를 가지고 있다.
    //4개의 방에는 4명의 사람들이 탈 수 있다.
    //그 사람들은 각자의 목적지를 가지고 있다.
    private String[][] pasCar = new String[4][4];					   
    private int curStation;											    
    private String[] stations = {"합정", "홍대입구", "신촌", "이대", "아현"};	
    private int pasCarNum;											    
    private int desNum;												  

    public Subway() {
        for(int i=0; i<4; i++)
            for(int j=0; j<4; j++)
                pasCar[i][j] = "";	

        curStation = 0;			
    }

    public int getCurStation() {			
        return curStation;
    }

    public String[] getStations() {			
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
        for(int i=0; i<4; i++) {										
            System.out.printf("%d호차 : ", i+1);
            if(checkEmptySeats(i)==true)							
                System.out.println("가능");
            else if(checkEmptySeats(i)==false)
                System.out.println("불가능");
        }
        System.out.println();
        System.out.println(">>어느 호차에 탑승하시겠습니까?");
        for(int i=0; i<4; i++)
            System.out.printf("(%d) %d호차 ", i+1, i+1);				
        System.out.println();
        pasCarNum = scan.nextInt()-1;

        System.out.println();
        System.out.println(">>목적지를 선택해 주세요.");						
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
    public boolean checkEmptySeats(int i) {	
        int emptySeats = 4;					
        for(int j=0; j<4; j++)
            if(pasCar[i][j]!="")			
                emptySeats--;				
        if(emptySeats==0)					
            return false;

        return true;						
    }
    //객차 상황을 보여주는 함수
    public void status() {					
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
