public class Canvas {

    public static void main(String[] args) {


        //1. canvas라는 이름으로 문자 20x20개를 저장할 수 있는 배열 객체를 생성한다.
        char[][] canvas = new char[20][20];


        //2. canvas 배열을 다음처럼 ‘┼’ 문자로 채우는 코드를 작성하시오.
        {
            setCanvas(canvas);
            printCanvas(canvas);
            System.out.println("board 초기화 완료");
        }


        //3. ‘○’ 문자를 이용해서 canvas에 선을 그리는 함수를 작성하시오.
        {
            int x1 = 2;
            int x2 = 13;
            int y1 = 2;
            int y2 = 13;

            //drawLineOnCanvas함수 호출
            drawLineOnCanvas(canvas, x1, x2, y1, y2);
        }

    }

    //drawLineOnCanvas함수
    static void drawLineOnCanvas(char[][]canvas, int x1, int x2, int y1, int y2) {
        setCanvas(canvas);
        for(int y=0; y<20; y++) {
            for(int x=0; x<20; x++) {
                if((y==x) && ((x>=x1&&x<x2)||(y>=y1&&y<=y2)))
                    canvas[y][x] = '○';
            }
        }
        //printCanvas함수 호출
        printCanvas(canvas);

    }


    //setCanvas함수
    static void setCanvas(char[][] canvas) {
        for(int y=0; y<20; y++)
            for(int x=0; x<20; x++)
                canvas[y][x] = '┼';
    }


    //printCanvas함수
    static void printCanvas(char[][] canvas) {
        for(int y=0; y<20; y++) {
            for(int x=0; x<20; x++)
                System.out.print(canvas[y][x]);
            System.out.println();
        }

    }


}
