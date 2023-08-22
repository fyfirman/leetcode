class MinStack {
    stack: {val: number, min: number}[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        let min;
        if(this.stack.length === 0){
            min = val;
        } else {
            min = this.stack[this.stack.length-1].min > val ? val : this.stack[this.stack.length-1].min;
        }
        this.stack.push({ val, min });
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1].val;
    }

    getMin(): number {
        return this.stack[this.stack.length - 1].min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */