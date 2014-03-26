#pragma strict
var skin:GUISkin;

function OnGUI()
{
	//font color etc according to this skin
	GUI.skin = skin;
	
	GUI.Label(Rect(0,0,200,50),"Hello guys!");
}
