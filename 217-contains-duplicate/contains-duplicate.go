func containsDuplicate(nums []int) bool {
    hashMap := make(map[int]int)
    for _, num := range nums {
        _, exist := hashMap[num]
        if exist {
            return true
        }

        hashMap[num] = 1
    }

    return false
}