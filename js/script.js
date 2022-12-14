function duplicateEncode(word) {
	word = word.toLowerCase();
	let newWord;
	for (let i = 0; i < word.length; i++){
		let a = word.slice(0,i) + word.slice(i+1);
		if (a.includes(word[i])) {
			if (newWord == undefined){
				newWord = ')';
			}else{
				newWord = newWord + ')'
			};
		} else if (newWord == undefined) {
			newWord = '(';
		} else {
			newWord = newWord + '('
		}
	}
	return newWord;
}