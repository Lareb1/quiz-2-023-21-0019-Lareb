function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
  
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return average;
  }
  

  const numbers = [69, 99, 86, 81];
  const avg = calculateAverage(numbers);
  console.log("Average:", avg);


  //-----Task2-----//
  function ArrayWithIndex(arr) {
    arr.map((value, index) => {
      console.log(`Value at index ${index + 1} is ${value}`);
    });
  }
  

  const numbers1 = [100, 90, 80, 70];
  ArrayWithIndex(numbers1);
  
  //-----Task3-----//
  const person = {
    name: "Lareb",
    age: 2,
    country: "Pakistan",
    semester: 5,
    cms: "023-21-0019",
    details: {
      contactNumber1: "0308-7606166",
      email1: "Lareb@gmail.com",
      contactNumber2: "0318-637389",
      email2: "Larebarain@gmail.com",
      contactNumber3: "0382968-781",
      email3: "Laareb.arain9@gmail.com",
    },
  };
  
 
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Country:", person.country);
  console.log("Semester:", person.semester);
  console.log("CMS:", person.cms);
  

  console.log("Contact Number 1:", person.details.contactNumber1);
  console.log("Email 1:", person.details.email1);
  console.log("Contact Number 2:", person.details.contactNumber2);
  console.log("Email 2:", person.details.email2);
  console.log("Contact Number 3:", person.details.contactNumber3);
  console.log("Email 3:", person.details.email3);
  