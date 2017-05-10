' use strict '
// Car class that can drive 
	let Car = class
	{
		constructor(name, model, type)
		{
			this.name = name || 'General' ; // if no input name the name "General" is specified
			this.model = model || 'GM';
			this.type = type || 'CarType' ;
			
			if(this.name==='Porshe' || this.name==='Koenigsegg')  // check if car is porche or koenigsegg
			{
		
				this.numOfDoors = 2;
				this.drive = function()
				{
					this.speed = '250 km/h';
				}
				this.numOfWheels = 4;
				this.isSaloon = true;
		
			}
			else if(this.type === 'trailer') // check if car type is trailer
			{
				this.numOfWheels = 8;
				this.isSaloon = false;
				this.speed = '0 km/h';
				this.drive = function()
				{
					this.speed = '77 km/h';
				}
				
				
			}
			
			else
			{
				this.numOfDoors = 4;
				this.isSaloon = true;
				this.numOfWheels = 4;
			}
			
		}
		
		
		
		
	}



	 
	 



module.exports = Car;