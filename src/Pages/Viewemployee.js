import Navbar from './Navbar';

import React, { useState, useEffect } from 'react';
import {Grid ,Avatar} from '@material-ui/core';
import { DataGrid , GridToolbarExport,
  GridToolbarContainer} from '@mui/x-data-grid';
import { getTableHeadUtilityClass } from '@mui/material';
const datagridSx = {
  borderRadius: 1,
  
  "& .MuiDataGrid-main":{
  //'& div[data-rowIndex][role="row"]:nth-of-type(5n-4)': {
    color: "blue",
    fontSize: 18,
     borderRadius: 2 ,
     borderColor:"brown",
     
    backgroundColor: "white",
    //risky
    //minHeight: "60px !important",
    height: 80,
    //"& div": {
     // minHeight: "60px !important",
      //height: 60,
      lineHeight: "59px !important",
      lineColor:"red",
    //}
  //},
  //"& .MuiDataGrid-virtualScrollerRenderZone": {
    //"& .MuiDataGrid-row": {
     // "&:nth-child(2n)": { backgroundColor: "dodger blue" }
    //}
  //},
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "orange",
    color: "black",
    fontSize: 20,
    height: 90,
    textAlign: "center"
  }
}
function MyExportButton() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const Viewemployee =()=>{
  const [search,setSearch] =useState('');
  const [record,setRecord] = useState([]);
  const columns = [
    { field: 'id', headerName: 'Emp-Id', width: 100 },
    //{headerName: "Avatar", render: rowData => <Avatar maxInitials={1} size={40} round={true} name={rowData === undefined ? " " : rowData.fullName} />  },
    { field: 'fullName', headerName: 'Name', width: 150 },
    { field: 'phoneNumber', headerName: 'Mobile', width: 150 },
    {field:'address',headerName:'Address',width:250,},
    {field:'panId',headerName:'pan Id',width:150},
    { field: 'emailAddress', headerName: 'E-mail', width: 200 },
    {field:'date',headerName:'Joining date',width:200},
    {field:'project',headerName:'Project',width:150},
    {field:'Tools',headerName:'Tools',width:150},
    {field:'desg',headerName:'Designation',width:150},
    {field:'certifications',headerName:'certifications',width:150},
    {field:'AreaofInterest',headerName:'AreaofInterest',width:150},
    {
      field: "actions",
      headerName: "actions",
      width: 120,
}
];
const DOMAIN_URL = 'http://localhost:4000';
const[rowdata, setRowData]=useState();

async function getAllemployeerecords() {
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
    setRowData(recordvalues);
   //return Loginvalues;
   return recordvalues;
   }
  useEffect(() => {
    getAllemployeerecords()
  }, []);

    
return (<div>

<Navbar/>
<div style={{ padding: 40 }}>
<Grid
    container
    
  spacing={5}
    direction="row"
    alignItems="center"
    justifyContent="center">


<div style={{ height: 500, width: "70%" }}>

<h4>
     Employee Records page
      </h4>
      <input type="text" id="form1"  onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="Search Employee Here" style={{backgroundColor:"#ececec"}}/>

    <DataGrid
    sx={datagridSx}
    components={{
      Toolbar: MyExportButton,
    }}


  
      rows={rowdata}
      columns={columns}
      id="_id"
      pageSize={7}
      checkboxSelection
    />
  </div>
  </Grid>
  </div>
</div>);


}
export default Viewemployee;


/*



 
      
  




import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 }
]

const DataGrid = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default DataGrid




 const columns = [
      {field:'recordvalues.id',headerName:'ID'},
        { field: 'recordvalues.fullName', headerName: 'Name' },
        { field: 'recordvalues.panId', headerName: 'PAN no', width: 100 },
        { field: 'recordvalues.emailAddres', headerName: 'Email', width: 200 },
        { field: 'recordvalues.phoneNumber', headerName: 'Phone', width: 200 },
        { field: 'recordvalues.project', headerName: 'project', width: 100 },
        { field: 'recordvalues.address', headerName: 'Address', width: 200 },
        { field: 'recordvalues.Experience', headerName: 'Experience', width: 50 },
        { field: 'recordvalues.Tools', headerName: 'skills', width: 300 },
        { field: 'recordvalues.desg', headerName: 'desg', width: 300 },
        {field:'recordvalues.AreaofInterest',headerName:'Research Interest',width:150},
        {field:'recordvalues.Certifications',headerName:'Certifications',width:300},
      ]


*/