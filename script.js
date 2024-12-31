//your JS code here. If required.
let inputtype = document.querySelector('input');
inputtype.addEventListener("click",remove);

function remove()
{
	let selectedcolor = document.querySelector('#colorSelect');
	let selectedoption = selectedcolor.options[selectedcolor.selectedIndex];

	if(selectedoption){
		selectedcolor.removeChild(selectedoption);
	}
}