let j=0;
let i=0;
const gridSize= 16;

function boxCreater(gridSize){
	 for ( j=0; j < gridSize; j++) {
    	for ( i = 0 ; i < gridSize; i++) {
        	const container = document.querySelector("#container");
        	const subDiv = document.createElement('div');
        	subDiv.id='subDiv';
        	const hover = document.createAttribute("onmouseover");
        	hover.value="style.background='black';" 
        	subDiv.classList.add('gridBox');
        	subDiv.setAttributeNode(hover);
        	container.appendChild(subDiv);

    	}
	}
	container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, auto)`);

}

boxCreater(gridSize);




let btn = document.querySelector('#reset');
btn.addEventListener('click', function(){
			deleteBox();
			const gridSize = +prompt("Enter grid size: ")
			boxCreater(gridSize);
			});



function deleteBox(){
  document.querySelectorAll("#subDiv").forEach(function(element) {
        element.remove();
      });
};






              



