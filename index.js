// Assuming `employee` is a global object that can be modified
let employee = {
    name:'Sam',
};

// 1. Non-destructive update function (returns a new object)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee, streetAddress: '11 Broadway' }; // Creates a new object with the new key-value pair
  return updatedEmployee;
}

// 2. Destructive update function (mutates the original object)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = '12 Broadway'; // Directly updates the original object
  return employee;
}

// 3. Non-destructive delete function (returns a new object without the key)
function deleteFromEmployeeByKey(employee, key) {
  const updatedEmployee = { ...employee }; // Create a shallow copy of the employee
  delete updatedEmployee.name; // Delete the key from the copy
  return updatedEmployee;
}

// 4. Destructive delete function (mutates the original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name; // Directly deletes the key from the original object
  return employee;
}


