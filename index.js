// Write your solution in this file!
const employee = {
    "name":"Bob",
    "streetAddress":"123 Hello Lane", 
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, [key]:value};
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const oneLessEmployee = {...employee};
    delete oneLessEmployee[key];
    return oneLessEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};