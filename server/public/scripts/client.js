console.log("Hello World");
// object
let employ = {
    first: "Lucas",
    last: "Martin",
    id: 123,
    title: "Production",
    annualSalary: `$${1000}`,
}

let employees = [];
let totalMonthlyCost = 0;


// add employee info to table
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
            employees.push(employ)
            totalMonthlyCost += salaryName / 12;
            updateCost();
            console.log(totalMonthlyCost);
}
// had to get help for this part. looked at another user's assignment
function updateCost(){
    let annualSalaryUpdate = document.getElementById('TotalMonthCost');
    annualSalaryUpdate.textContent = (totalMonthlyCost);
    if (totalMonthlyCost > 20000) {
        annualSalaryUpdate.classList.add('overBudget');
    }
}


function removeEmployee(event){
    event.target.closest("tr").remove();
}

