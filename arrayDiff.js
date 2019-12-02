function array_diff(a, b) {
 let a1 = [], diff = [];
	for(let i = 0; i < a.length; i++){
	a1[a[i]] = true
	}

	for(let i = 0; i < b.length; i++){
	if(a[b[i]]){
	delete a[b[i]];
	}else{
	a[b[i]] = true
	}


		for(let k in a){
		diff.push(k)
		}
	}
	return diff;
}














