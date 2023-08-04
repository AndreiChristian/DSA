function backtrack(start:number, path:number[], n:number, k:number, result:number[][]):void{

	if(path.length === k){
		result.push([...path]);
		return
	}


	for(let i=start; i<=n; i++){
		path.push(i)
		backtrack(i+1,path, n, k, result)
		path.pop()
	}
}


function combine(n: number, k: number): number[][] {


	const result:number[][] = [];

	backtrack(1,[],n,k,result)

	return result
}
