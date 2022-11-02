Hi, everyone, this video is to demonstrate the process of using an openAPI to get an instance details by its alias.
To do that, first of all, we need to log in to the super OS platform, 
and then, go to design center, under object model management, create a service for your script.

Now, the service can be either under a template or an instance. In our example today, we will try it under an instance.
Okay.
so inside the instance, let's create a service by clicking service here.
.
.

Enter basic information of the service.
.
.
Make sure you set the return format to JSON.


Click script, and then we start on our script.
.

Let's go to our official site, find the API document.
Remember, our openAPIs are generally used together with HTTP requests. Check the type of API before you copy the request code.

Here you can see the arrow icons, left arrow represents get and right is put or post requests.

Okay, under openAPI, HTTP request, copy the get request code and paste it here.

see the base url, it's for reference, we need to change it to our specific openAPI url.

Go to the official site, under openAPI, find the API. name is Get instance details by alias? copy the path, and then paste it here.

We need to use relative path, so copy from open api? to the end.
.
.

change template namespace to the actual namespace.



.
.
.
.
template alias.
.
.
.
.


and then instance alias.<br/>
.<br/>
.<br/>
.<br/>
.<br/>

.
.
.
.
.
.
?
?
?
.
.
click debugging to check the result.

You can see here, the result contains all details of the instance.


we can convert the result to JSON and return it.
.
.
.
.
.
.

Let's get the body information of the result.
.
.
.
.

and it looks like this.


So that's how you can use an instance alias to get detailed information of the instance.

Thanks for watching.