/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//   const eligibleDates = this.timeInEvents.map(function (e) {
//     return e.date;
//   });

//   const payable = eligibleDates.reduce(
//     function (memo, d) {
//       return memo + wagesEarnedOnDate.call(this, d);
//     }.bind(this),
//     0
//   ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

//   return payable;
// };

const createEmployeeRecord = function (employeeRecord) {
  const [firstName, familyName, title, payPerHour] = employeeRecord;
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = function (employeeRecords) {
  return employeeRecords.map((employeeRecord) =>
    createEmployeeRecord(employeeRecord)
  );
};

const createTimeInEvent = function (clockInDateStamp) {
  const [date, hours] = clockInDateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hours),
    date,
  });
  return this;
};
const createTimeOutEvent = function (clockOutDateStamp) {
  const [date, hours] = clockOutDateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hours),
    date,
  });
  return this;
};

const hoursWorkedOnDate = function (date) {
  const timeInEventOnDate = this.timeInEvents.find(
    (timeInEvent) => timeInEvent.date === date
  );
  const timeOutEventOnDate = this.timeOutEvents.find(
    (timeOutEvent) => timeOutEvent.date === date
  );
  return (timeOutEventOnDate.hour - timeInEventOnDate.hour) / 100;
};
const wagesEarnedOnDate = function (date) {
  return parseFloat(
    (this.payPerHour * hoursWorkedOnDate.call(this, date)).toString()
  );
};
const allWagesFor = function () {
  return this.timeInEvents.reduce((totalPay, timeInEvent) => {
    return totalPay + wagesEarnedOnDate.call(this, timeInEvent.date);
  }, 0);
};

const findEmployeeByFirstName = function (srcArray, firstName) {
  return srcArray.find(
    (employeeRecord) => employeeRecord.firstName === firstName
  );
};
const calculatePayroll = function (arrayOfEmployeeRecords) {
  return arrayOfEmployeeRecords.reduce(
    (totalPay, currentEmployee) => totalPay + allWagesFor.call(currentEmployee),
    0
  );
};
