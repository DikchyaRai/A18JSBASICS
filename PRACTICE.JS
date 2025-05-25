const data=[
    {id:1,name:"suman",age:20,gender:"male",haspassedout: true,occupation:undefined},
    {id:2,name:"mamta",age:40,gender:"male",haspassedout: true,occupation:undefined},
    {id:3,name:"manju",age:22,gender:"female",haspassedout: false,occupation:"iintern"},
    {id:4,name:"sanju",age:24,gender:"male",haspassedout: true,occupation:undefined},
     {id:5,name:"ranjuj",age:27,gender:"female",haspassedout: true,occupation:undefined},
]

const response={
    status:200,
    message:"data fetch successfully",
    data:data
}

const getUserName=()=>{
  const APIstatus =response.status
  if(APIstatus===200){
    const result=response.data
    .map((user)=>user.occupation ?? user.name)
    return result;
  }else{

  }
}
console.log(getUserName());



