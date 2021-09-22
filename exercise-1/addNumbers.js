// Declare function addNumbers
function addNumbers() {
  //Initiate integer variables of firstNum and secondNum
  var firstNum = 9
  var secondNum = 14

  //Reassign values for firstNum and secondNum
  firstNum = 3
  secondNum = 4

  //Declare array variable of nums containing firstNum and secondNum
  var nums = [firstNum, secondNum]

  //Declare integer variable of product as the product of firstNum and secondNum
  var product = firstNum * secondNum
  //Declare integer variable of sum as the sum of firstNum and secondNum
  var sum = firstNum + secondNum
  //Declare integer variable of average as the average of firstNum and secondNum
  var average = sum / nums.length

  //Print out firstNum and secondNum
  console.log(nums[0])
  console.log(nums[1])

  //Print out "The first number is 3 and the second number is 4!"
  console.log(`The first number is ${num1} and the second number is ${num2}!`)

  //Returns value of sum to the function
  return sum
}
