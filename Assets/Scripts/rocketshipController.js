#pragma strict
//declaring an integer (number) variable which will control rocket speed
var rocketSpeed:int;

//runs ONCE at the beginning of the game
function Start () {
	
}


function move(rSpeed:int)
{
	//x axis -1 / 0 / 1
	//transform.Translate(Vector3.right * Time.deltaTime * Input.GetAxis("Horizontal"))
	if (Input.GetKey(KeyCode.LeftArrow))
	{
		transform.Translate(Vector3.left * Time.deltaTime * rSpeed);
	}
	
	if (Input.GetKey(KeyCode.RightArrow))
	{
		transform.Translate(Vector3.right * Time.deltaTime * rSpeed);
	}
	
	//to implement the up and down
	if (Input.GetKey(KeyCode.UpArrow))
	{
		transform.Translate(Vector3.up * Time.deltaTime * rSpeed);
	}
	
	if (Input.GetKey(KeyCode.DownArrow))
	{
		transform.Translate(Vector3.down * Time.deltaTime * rSpeed);
	}
}

//runs ALL THE TIME while the game is running (when play button is pressed)
function Update () {
	
	move(rocketSpeed);
		
}