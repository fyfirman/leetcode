class KthLargest {
    private nums: number[];
    private k: number;

    constructor(k: number, nums: number[]) {
        this.k = k;
        this.nums = nums;
    }

    add(val: number): number {
        this.nums.push(val);
        return this.nums.sort((a,b) => b - a)[this.k - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */