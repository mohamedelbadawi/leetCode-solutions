/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big=big;
    this.medium=medium;
    this.small=small;
      this.obj={
      1:big,
      2:medium,
      3:small
  };
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {

  if(this.obj[carType]>0){
      this.obj[carType]-=1
      return true
  }
    else{
        return false
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */