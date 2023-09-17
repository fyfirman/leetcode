// Hello Jane
// Hello my name is Jane 
// 
function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
    if(sentence1 === sentence2){
        return true;
    }

    let shortSentence = sentence1.split(' ');
    let longSentence = sentence2.split(' ');

    if(shortSentence.length > longSentence.length){
        shortSentence = sentence2.split(' ');
        longSentence = sentence1.split(' ');
    }

    let left = 0;
    let right = 1; 

    while(left + right <= shortSentence.length){
        if(shortSentence[left] === longSentence[left]){
            left++;
            continue;
        }

        if(shortSentence[shortSentence.length - right] === longSentence[longSentence.length - right]){
            right++;
            continue;
        }

        
        return false;
    }

    return true
};