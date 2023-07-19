console.log("Hello World");
let employ = {
    first: "Lucas",
    last: "Martin",
    id: 123,
    title: "Production",
    salary: `$${1000}`,
}

function addEmployee(event){
    event.preventDefault();
    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let idName = document.querySelector("#ID-name").value;
    let titleName = document.querySelector("#title-name").value;
    let salaryName = document.querySelector("#salary-name").value;
    let newEmployee = document.querySelector("#employees");
    newEmployee.innerHTML +=`
            <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${idName}</td>
                <td>${titleName}</td>
                <td>$${salaryName}</td>
                <td><button class="remove-employee" onclick="removeEmployee(event)">Delete</button></td>
            </tr>`;
            employ.newEmployee.push("Bob", "Cratchet", 123, "accounting", "1000")
            document.querySelector("#bio").reset();
            return
}

function removeEmployee(event){
    event.target.closest("tr").remove();
}