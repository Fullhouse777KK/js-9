function objfirst() {
  const data = {
    name: "Иван Иванов",
    department: "Отдел разработки",
    proff: "Програмист",
    salary: "5000$",
    year: "2000 год",
  };
  const { name:fullName, department:Depp, proff:proffession, salary:salaryy, year:pYear } = data;
  console.log(`
  -${fullName} 
  -${Depp} 
  -${proffession} 
  -${salaryy} 
  -${pYear}`);

}
objfirst();


function objSecond() {
    const data = {
      name: "Иван",
      surname: "Иванов",
      job: "Отдел разработки",
    };
    const { name, surname, job } = data;
    console.log(`
    -${name} 
    -${surname} 
    -${job}`);
  }
  objSecond();

  function objThird() {
    const data = ["Ivan", "Ivanov", "Develepment Department"];
    let add = 'Junior'
    if(data[3] == 'undefined'){
     data.push(add);
    }
    console.log(`
    ${data[0]}
    ${data[1]}
    ${data[2]}
    ${data[3]}`)
    
  }
  objThird();

  function colors() {
    
    
    const data = {
      color: 'red',
      width: 400,
      height: 500,
    };

    console.log(data.color,data.width,data.height)
  }
  colors();




//   function objInfoooo(){
//     const data = {
//     name: "Иван Иванов",
//     department: "Отдел разработки",
//     proff: "Програмист",
//     salary: "5000$",
//     year: "2000",
//     }

// const {} = data
//   }
//   objInfoooo()

