window.addEventListener("load",function(){

    //let; 자바에서 변수와 같은 기능, 지역화 가능, 변수 충돌 방지
    //const; 자바에서 final, 값 대입 후 변경 불가, 고정적 -> 상수형 변수를 생성할 때 사용
    const gameCanvas  = new GameCanvas();
    gameCanvas.run();
    }

);