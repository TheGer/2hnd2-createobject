#pragma strict

function Start () {

}

function Update () {
	//SINCE the object is ROTATED by 90 degrees, its forward axis is the X-axis, 
	//therefore we will be moving the object FORWARD in ITS X-axis.
	//the laser's speed will be 20
	transform.Translate(Vector3.right * 20 * Time.deltaTime);
	
}

//once it leaves the screen, it will be removed from memory
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
