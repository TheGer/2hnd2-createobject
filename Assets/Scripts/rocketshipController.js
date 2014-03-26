#pragma strict
//declaring an integer (number) variable which will control rocket speed
var rocketSpeed:int;
//adding a reference to the laser
var laser:Rigidbody;

//runs ONCE at the beginning of the game
function Start () {
	
}

//shoot the laser
function shoot()
{
	//will shoot the laser at the rotation of the rocketship
	var rot:Quaternion;
	
	//90 degrees (the rotation of the laser) * the rotation of the rocket
	//this makes the laser shoot in the forward direction of the rocket
	rot = laser.transform.rotation * transform.rotation;
			
	Instantiate(laser,transform.position,rot);
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

function moveWithRotation(rSpeed:int)
{
	//to implement the up and down (same as other function)
	if (Input.GetKey(KeyCode.UpArrow))
	{
		transform.Translate(Vector3.up * Time.deltaTime * rSpeed);
	}
	
	if (Input.GetKey(KeyCode.DownArrow))
	{
		transform.Translate(Vector3.down * Time.deltaTime * rSpeed);
	}
	
	//ROTATION in this case.  The Z axis heads INTO the screen
	if (Input.GetKey(KeyCode.LeftArrow))
	{
		transform.Rotate(Vector3.forward * Time.deltaTime * rSpeed);
	}
	
	if (Input.GetKey(KeyCode.RightArrow))
	{
		transform.Rotate(Vector3.back * Time.deltaTime * rSpeed);
	}

}


//runs ALL THE TIME while the game is running (when play button is pressed)
function Update () {
	
	//move(rocketSpeed);
	moveWithRotation(rocketSpeed);
	
	//one press
	if (Input.GetKeyDown(KeyCode.Space))
	{
		shoot();
	}
		
}