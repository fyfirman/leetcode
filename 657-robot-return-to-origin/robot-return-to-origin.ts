function judgeCircle(moves: string): boolean {
     const position = {x: 0, y: 0};
    
    moves.split("").forEach((move) => {
        switch(move){
            case "L":
                position.x -= 1;
                break;
            case "D":
                position.y -= 1;
                break;
            case "R":
                position.x +=1;
                break;
            case "U":
                position.y += 1;
                break;
        }
    });
    
    return (position.x === 0 && position.y === 0);
};