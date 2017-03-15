function sumArray(array) {
  /// TODO 算法写这里
  var ary = [];
  //判断数据类型是否为数组
  if(array!=null){
	  if((typeof array=='object')&&array.constructor==Array){ 
		  if(array.length>2){
		 	 ary = array.sort(function(a,b){return a-b}).slice(1,array.length-1); 	
		  }else{
		  	ary = array;
		  }
		  var sum = 0;
		  for(var i = 0,j = ary.length;i<j;i++){
			 sum = sum+ary[i];	
		  }
		  return sum;
	  }else{
	  	console.error("传入的类型不是数组类型")
	  }  	
  }else{
  	console.warn("输入的参数不能为空");
	return 0;
  }
}

module.exports = sumArray
