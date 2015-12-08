//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer

      // Specify context for variable or function call.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      /* Answer

      1) new keyword--specifies new object based on constructor function definition.
      2) explicit context using bind, call, or apply function.
      3) implicit context using whatever is left of the dot as the context
      4) default global context, which in the browser is window.
*/
  // 3) What is the difference between call and apply?

      /* Answer

      Both call and apply pass the execution context and the parameters to a function. The
      difference is that call passes each parameter individually, while apply passes the
      parameters as an array of parameters */


  // 4) What does .bind do?

      /* Answer

      It binds the function to the left of the period to the object passed as argument
      to the bind() function. The function will now have the object's context.

      example: var boundFunction = goFaster.bind(car)
      This binds the function goFaster() to the object car, and assigns goFaster to the
      variable boundFunction. */

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

var user = {
  username: "vmichael",
  email: "vmic232@yahoo.com",
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

var name = user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    this.move += 10;
    return this.move;
  }
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

var priusMove = prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
var mustangMove = mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function.
// You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

/* Above you're given the getYear function. Using your prius and mustang objects from above,
use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects.
*Don't add getYear as a property on both objects*. */

//Note(no tests)
  //Code Here

var priusYear = getYear.bind(prius);
var mustangYear = getYear.bind(mustang);

//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  /* Answer Here
  Undefined, because getMYUsername is using the default global window context. username is undefined in this context. */

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

  // 'This' is bound to the global window context.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

var newFunc = getMyUsername.bind(myUser);

setTimeout(newFunc, 5000);
