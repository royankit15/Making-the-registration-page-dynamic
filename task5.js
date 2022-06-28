const posts = [
    { title : 'Post One', body: 'This is post one'},
    { title : 'Post Two', body: 'This is post two'}
];

   function getPosts() 
   {
       setTimeout (() => {
            let output ='';
            for (let i=0;i<posts.length;i++)
            {
                output +=`<li>${posts[i].title}</li>`
            }
            document.body.innerHTML=output;
        },2000)  
   }
   
   function createPost (post){
    return new Promise ((resolve, reject) => {
    setTimeout (() => {
        posts.push(post);

        const error =false;
        if (!error)
        {
            resolve();
        }
        else 
        {
            reject('Error: Something Went Wrong'); 
        }
    }, 2000);
   });
}
    function deletepost(){
        return new Promise ((resolve,reject) => {
            setTimeout (( ) => {
                if (posts.values !==0)
                {
                    resolve(posts.pop());
                }
                else
                {
                    reject('Array is Empty now'); 
                }
            },2000);
        });
    }

createPost ({title:'Post Three', body: 'This is Post Three'})
.then (() => {
    getPosts()
    deletepost().then(() => {
        getPosts()
    })
 })
.catch(err => console.log(err))
/* .then(deletepost)
.catch(err => console.log(err))) */


//promise.all 

const promise1 = Promise.resolve('Hello World');
const promise2= 10;
const promise3= new Promise((resolve,reject)=>
     setTimeout(resolve,2000,'Goodbye')
    );

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);});