var t1=document.getElementById('t1');
const t2=document.getElementById('t2');
const t3=document.getElementById('t3');
createUser();

function createUser(){
    

    
    axios.get('https://crudcrud.com/api/20995fd423e646feb3cb9dc060f7e3f5/t1')
.then((res) => {
    for(let i=0;i<res.data.length;i++){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(`${res.data[i].rate} - ${res.data[i].tb} - ${res.data[i].item}`
        ));
        t1.appendChild(li);

        var de=document.createElement('button');
        de.id=res.data[i]._id;
        de.appendChild(document.createTextNode('Delete'));
        li.appendChild(de);
    }
})
.catch(err => console.log(err))


axios.get('https://crudcrud.com/api/20995fd423e646feb3cb9dc060f7e3f5/t2')
.then((res) => {
    for(let i=0;i<res.data.length;i++){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(`${res.data[i].rate} - ${res.data[i].tb} - ${res.data[i].item}`));
        t2.appendChild(li);


        var de=document.createElement('button');
        de.id=res.data[i]._id;
        de.appendChild(document.createTextNode('Delete'));
        li.appendChild(de);

    }
})
.catch(err => console.log(err))

axios.get('https://crudcrud.com/api/20995fd423e646feb3cb9dc060f7e3f5/t3')
.then((res) => {
    for(let i=0;i<res.data.length;i++){
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(`${res.data[i].rate} - ${res.data[i].tb} - ${res.data[i].item}`));
        t3.appendChild(li);


        var de=document.createElement('button');
        de.id=res.data[i]._id;
        de.appendChild(document.createTextNode('Delete'));
        li.appendChild(de);

    }
})
.catch(err => console.log(err))


}



function deleteOrder(){
    de.id=bt.id;
    axios.delete('https://crudcrud.com/api/20995fd423e646feb3cb9dc060f7e3f5/t1/${de.id}')
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

