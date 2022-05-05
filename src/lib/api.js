

const DOMAIN_URL = 'http://localhost:4000';
var currentEmployeeID=1001;
//http://localhost:4000/api/Login/get
export default async function getAllLogindata() {
 const response = await fetch(`${DOMAIN_URL}/api/Login/get`,{
       method: 'POST',
            
            headers: {
              'Content-Type': 'application/json',
            },
          });
  const data = await response.json();
console.log(data.data[0].password);
console.log(data.data[0].username);

const username1=data.data[0].username;
const password1=data.data[0].password;
const Logobj={un:username1,pw:password1};
console.log(Logobj);
  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch data.');
  }
/*
const Loginvalues = [];

  for (const key in data) {
    const Logindata = {
      id: key,
      ...data[key],
    };

    Loginvalues.push(Logindata);
   
  
  }
   */ 
  return Logobj;
//return Loginvalues;
}


export async function addemployeerecord(employeerecord) {

  employeerecord["empid"]=String(currentEmployeeID);
 
  console.log("api called to add employee");
  const response = await fetch(`${DOMAIN_URL}/api/Register/new`, {
    method: 'POST',
    body: JSON.stringify(employeerecord),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  console.log(data);
  currentEmployeeID=currentEmployeeID+1;
  if (!response.ok) {
    throw new Error(data.message || 'Could not create employee record.');
  }
  return null;
}


export  async function getAllemployeerecords() {
  const response = await fetch(`${DOMAIN_URL}/api/Reports/get`,{
        method: 'POST',
             
             headers: {
               'Content-Type': 'application/json',
             },
           });
   const data = await response.json();


   if (!response.ok) {
     throw new Error(data.message || 'Could not fetch data.');
   }
 
 const recordvalues = [];
 
   for (const key in data.data) {
     const employeedata = {
       id: key,
       ...data.data[key],
     };
 
     recordvalues.push(employeedata);
    

   }
    console.log("reports from api" );
  console.log(recordvalues);
 //return Loginvalues;
 return recordvalues;
 }