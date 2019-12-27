function checkAll(){
	for(let i=1;i<=4;i++){
		if(document.getElementById("t"+i).value=="")
        {
            alert("Заполните поле "+i);
        }

	}
}