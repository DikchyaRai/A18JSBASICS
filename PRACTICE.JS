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
  if(APIstatus===200) {
    const result=response.data
   . filter((user) => user.age >21 && user.occupation)
   .map((user)=> user.name);
    //.map((user)=>user.occupation ?? user.name)
    return result;
  }else{

  }
}
//console.log(getUserName());

const customers=[
  {id:1,name:"suman",bought:[{id:1,name:"pressure cooker"},{id:7,name:"mixture"}]},
  {id:4,name:"sanju",bought:[{id:4,name:"momo"},{id:4,name:"chowmin"}]},
  {id:2,name:"mamta",bought:[{id:10,name:"vest"},{id:7,name:"mixture"}]},
  {id:3,name:"manju",bought:[{id:3,name:"pre"},{id:3,name:"mie"}]}

]
 const CustomerResponse ={
  status: 200,
  message:"data fetched successfully",
  data:customers,
 };
 //console.log(getproductname());
 const productnumber=()=>{
  if(CustomerResponse.status===200){
    let boughtproduct=[];
    CustomerResponse.data.forEach((customer)=>{
    customer.bought.map((item)=>{
      boughtproduct.unshift(item.name);
     }); 

    });
    
     return boughtproduct;  
  }
 };
 console.log(productnumber());
 const getProductNumbers=()=>{
  if(CustomerResponse===200){
    let productnumber={};
    CustomerResponse.data.forEach((customer)=>{
      customer.bought.map((item)=>{
        if(productnumber[item.id]){
          productnumber[item.id]+=1;
        } else {
          productnumber[item.id]+=1;
        }
        })
      });
      return productnumber;
    }
 };

