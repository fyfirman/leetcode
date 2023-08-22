func contains(arr []string, word string) bool {
    for _, item := range arr {
        if item == word {
            return true
        }
    }

    return false
}

func getDiffCharCount(word1 string, word2 string) int {
    charDiff := 0
    for i := 0; i < len(word1); i++ {
        if word2[i] != word1[i] {
            charDiff++
        }
    }

    return charDiff
}

type StackItem struct {
    Source string
    Step int
}


func ladderLength(beginWord string, endWord string, wordList []string) int {
    if !contains(wordList, endWord) {
        return 0
    }

    stack := []StackItem{{ Source: beginWord, Step: 0}}
    hashMap := make(map[string]int)

    for len(stack) > 0 {
        curr := stack[0]
        stack = stack[1:]

         if curr.Source == endWord {
             return curr.Step + 1
         }

         for _, word := range wordList {
            _, exist := hashMap[word]

             if exist {
                 continue
             }

             if getDiffCharCount(curr.Source, word) != 1 {
                 continue
             }

             hashMap[word] = curr.Step
             
             newStackItem := StackItem{
                 Source: "" + word,
                 Step: curr.Step + 1,
             }

            fmt.Println(curr.Step, "|", curr.Source, "->", word)

             stack = append(stack, newStackItem)
         }
    }

    return 0
}