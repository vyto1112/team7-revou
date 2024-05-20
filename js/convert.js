const xlsx = require('xlsx');
const fs = require('fs');

//read file excel
const data_excel = xlsx.readFile('RevoU Data Cleaning.xlsx')

const sheet_names = data_excel.SheetNames[1]
const worksheet = data_excel.Sheets[sheet_names]

//convert to json
const data_json = xlsx.utils.sheet_to_json(worksheet)
console.log(data_json[0])

//write as json
fs.writeFileSync('data_team7.json', JSON.stringify(data_json),'utf8')
