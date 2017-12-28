const http = new easyHTTP;

// Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", function(err, post){
    if(err){
        console.log(err);
    }else {
        console.log(post);
    }
});

// Get Single Post
http.get("https://jsonplaceholder.typicode.com/posts/1", function(err, post){
    if(err){
        console.log(err);
    }else {
        console.log(post);
    }
});


// Get Post Request 
// Create Data
const data = {
    title: "Custom Post",
    body: "This is a custom post"
};

// Create Post
http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post){
    if(err){
        console.log(err);
    }else {
        console.log(post);
    }
});

// Get PUT Request
http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post){
    if(err){
        console.log(err);
    }else {
        console.log(post);
    }
});

// Get DELETE Request 
http.delete("https://jsonplaceholder.typicode.com/posts/2", function(err, response){
    if(err){
        console.log(err);
    }else {
        console.log(response);
    }
});