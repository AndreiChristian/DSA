function finalValueAfterOperations(operations: string[]): number {

    let value = 0;

    for(const o of operations){

      if(o[0] === "+" || o[o.length - 1] === "+"){
      value ++
    } else {
      value --
    }

    }

}
