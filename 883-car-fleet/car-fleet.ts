/**
    # question
    position = [10,8,0,5,3]
    speed =    [2,4,1,1,3]
    
    # sort the arrays & maintain increasing monotonic stack
    target = 12
    position = [0,3,5,8,10]
    speed    = [1,3,1,4,2]
    
    1 => stack = [1]
    3 => stack = [3] (3 > 1, no fleet)
    1 => stack = [1] (1 < 3, fleet. stack to be one because faster car will slow down)
    4 => stack = [1,4] (4 > 1, no fleet)
    2 => stack = [1,2] (2 < 4, fleet)

    2 multiple fleet + 1 single feet = 3

    # next question: how the target is affected?
    
    ## modified question 
    target = 12
    position = [0,3,5,8,10]
    speed    = [1,3,1,4,3]
    
    1 => stack = [1] -> push
    3 => stack = [1,3] (3 > 1, no fleet) -> push
    1 => stack = [1,1] (1 < 3, fleet. stack to be one because faster car will slow down) -> pop & push
    4 => stack = [1,1,4] (4 > 1, no fleet) -> push
    3 => stack = [1,1,4,3] (3 < 4, fleet but bumped at 13, so it's not counted)

    if fleet, we need to find bumped position?
    2th & 3th => (currentPos + (i*speed)) 6 & 6 = bumpedAt=6
    4th & 5th => 12 & 13 -> 16 & 16 => bumpedAt=16

    if(bumpedAt <= target){
        fleet;
    }

    # summary
    1. sort by the positon
    2. maintain increasing monotonic stack
    3. if(current.speed > topStack.speed)
        then find bumpedAt
            if(bumpedAt <= target)
                fleet
            else
                no fleet
        else
            no fleet
 */

interface Car {
    position: number;
    speed: number;
}

/**
 * O(m)
 * secondCar.speed < firstCar.speed
 * secondCar.position > firstCar.position
 */
function findBumpedAt(firstCar: Car, secondCar: Car): number {
    // Time when collided
    let i = (secondCar.position - firstCar.position) / (firstCar.speed - secondCar.speed);
    
    return secondCar.position + (i * secondCar.speed)
}

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars: Car[] = [];
    position.forEach((pos, i) => {
        cars.push({position: pos, speed: speed[i]})
    });

    const sorted = cars.sort((a, b) => a.position - b.position);

    const stack: Car[] = [];

    for(let i = 0; i < sorted.length; i++){
        const current = sorted[i];
        if(stack.length === 0){
            stack.push(current);
            continue;
        }
        while(stack.length !== 0 && current.speed < stack[stack.length - 1].speed){
            const bumpedAt = findBumpedAt(stack[stack.length - 1], current);
            if(bumpedAt <= target){
                stack.pop();
                continue;
            }
            break;
        }
        stack.push(current);
    }
    console.log(stack)
    return stack.length;
};
