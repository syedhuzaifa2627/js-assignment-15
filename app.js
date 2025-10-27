// Chapter Objects

// Question 1

// let itemsArray = [
//   { name: "juice", price: "50", quantity: "3" },
//   { name: "cookie", price: "30", quantity: "9" },
//   { name: "shirt", price: "880", quantity: "1" },
//   { name: "pen", price: "100", quantity: "2" }
// ]

// let totalPriceAll = 0

// for(let i =0; i<itemsArray.length; i++){
//   let itemTotal = Number(itemsArray[i].price) * Number(itemsArray[i].quantity)
//   console.log(`Total price of ${itemsArray[i].name}: ${itemTotal}`)

//   totalPriceAll += itemTotal
// }

// console.log(`Total price of all items: ${totalPriceAll}`)

// Question 2

// let userDetails = {
//   name: "Ali Khan",
//   email: "ali@example.com",
//   password: "12345",
//   age: 25,
//   gender: "Male",
//   city: "Karachi",
//   country: "Pakistan"
// }


// console.log("age" in userDetails)     
// console.log("country" in userDetails)   

// console.log("firstName" in userDetails) 
// console.log("lastName" in userDetails)  

// Question 3

// function PersonData(a, b, c, d, e) {

//     this.name = a
//     this.age = b
//     this.gender = c
//     this.course = d
//     this.city = e

// }

// let student1 = new PersonData("Ali", 22, "Male", "Computer Science", "Multan")
// let student2 = new PersonData("Sara", 20, "Female", "Engineering", "Lahore")
// let student3 = new PersonData("John", 23, "Male", "Physics", "Islamabad")
// let student4 = new PersonData("Huzaifa", 17, "Male", "Mathematics", "Karachi")
// let student5 = new PersonData("Novera", 17, "Female", "Medical", "Karachi")


// console.log(student1)
// console.log(student2)
// console.log(student3)
// console.log(student4)
// console.log(student5)

// Question 4

//  function Person(name, gender, address, education, profession) {
//       this.name = name
//       this.gender = gender
//       this.address = address
//       this.education = education
//       this.profession = profession
//     }

//     function addRecord() {

//       let name = document.getElementById("name").value
//       let genderElement = document.querySelector('input[name="gender"]:checked')
//       let address = document.getElementById("address").value
//       let education = document.getElementById("education").value
//       let profession = document.getElementById("profession").value

      
//       if (!name || !genderElement || !address || !education || !profession) {
//         alert("Please fill all fields!")
//         return
//       }

//       let gender = genderElement.value

    
//       let person = new Person(name, gender, address, education, profession)


//       let recordsDiv = document.getElementById("records")
//       let record = document.createElement("p")
//       record.innerHTML = 
//         "<b>Name:</b> " + person.name + 
//         " | <b>Gender:</b> " + person.gender + 
//         " | <b>Address:</b> " + person.address + 
//         " | <b>Education:</b> " + person.education + 
//         " | <b>Profession:</b> " + person.profession
//       recordsDiv.appendChild(record)

      
//       document.getElementById("name").value = ""
//       document.getElementById("address").value = ""
//       document.getElementById("education").value = ""
//       document.getElementById("profession").value = ""
//       genderElement.checked = false
//     }



