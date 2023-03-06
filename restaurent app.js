var t1=document.getElementById('t1');
const t2=document.getElementById('t2');
const t3=document.getElementById('t3');



createUser();

function createUser(){
   
    
    axios.get('https://crudcrud.com/api/551d6401b6cb4fdbad37316167ebfe9b/t1')
.then((res) => {
    for(let i=0;i<res.data.length;i++){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(`${res.data[i].rate} - ${res.data[i].tb} - ${res.data[i].item}`
        ));
        t1.appendChild(li);


        var d1=document.createElement('button')
        d1.id='t1';
        var a=d1.id;
        var f= res.data[i]._id;
        

        
        
        d1.appendChild(document.createTextNode('Delete'));
        li.appendChild(d1);
        d1.addEventListener('click',deleteOrder(a,f))
        
    }
})
.catch(err => console.log(err))


axios.get('https://crudcrud.com/api/551d6401b6cb4fdbad37316167ebfe9b/t2')
.then((res) => {
    for(let i=0;i<res.data.length;i++){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(`${res.data[i].rate} - ${res.data[i].tb} - ${res.data[i].item}`));
        t2.appendChild(li);


        let d2=document.createElement('button')
        d2.id='t2';
        var a=d2.id;
        var y= res.data[i]._id;
       
        d2.appendChild(document.createTextNode('Delete'));
        li.appendChild(d2);


        d2.addEventListener('click', deleteOrder(a,y));
        
    }
})
.catch(err => console.log(err))

axios.get('https://crudcrud.com/api/551d6401b6cb4fdbad37316167ebfe9b/t3')
.then((res) => {
    for(let i=0;i<res.data.length;i++){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(`${res.data[i].rate} - ${res.data[i].tb} - ${res.data[i].item}`));
        t3.appendChild(li);


        let d3=document.createElement('button');
        d3.id='t3';
        var a=d3.id;
        var z = res.data[i]._id;
      
        d3.appendChild(document.createTextNode('Delete'));
        li.appendChild(d3);
        d3.addEventListener('click',deleteOrder(a,z));
        
    }
})
.catch(err => console.log(err))


}


    function deleteOrder(a,f) {
    
    
    
    axios.delete(`https://crudcrud.com/api/551d6401b6cb4fdbad37316167ebfe9b/${a}/${f}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};





function deleteOrder2(y,b){

    axios.delete(`https://crudcrud.com/api/551d6401b6cb4fdbad37316167ebfe9b/t2/${y}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
}


function deleteOrder3(z,c){
    

    axios.delete(`https://crudcrud.com/api/551d6401b6cb4fdbad37316167ebfe9b/t3/${z}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    

}

