# amplify-auth-with-auth-rules

### About the Task

it was great project i loved working on it. everything is implemented as mentioned on the task
i also made it responsive added error handling and form validation with email verification as well.
i have used s3 buckets for storing videos, aws amplify for setting up autthentication as well as graphql serverless 
backend for database im using DynamoDB.

### Trade off's in the Task

for validation's i can use formik and yup but to make the code base smaller i decided to use validator to validate 
input field's, another trade off is i used object-fit class for video to make them strech and fit the container which distrupt's the aspect ratio otherwise there will be blank space in the video container. if i would have more time i will probably add a button to delete our video.

### Few screenshot's of the Task
<br/>

* When nothing is posted
<br/><br/>
<img src="https://videoappc7ba0595c12e4738bd19fe875e92d417233351-production.s3.ap-south-1.amazonaws.com/public/No+Video.png" alt="img">
<br/>

* SignIn Page with OAuth & email signin
<br/><br/>
<img src="https://videoappc7ba0595c12e4738bd19fe875e92d417233351-production.s3.ap-south-1.amazonaws.com/public/Login.png" alt="img">
<br/>

* SignUp page with OAuth & email signup
<br/><br/>
<img src="https://videoappc7ba0595c12e4738bd19fe875e92d417233351-production.s3.ap-south-1.amazonaws.com/public/signup.png" alt="img">
<br/>

* Email verification page after SignUp
<br/><br/>
<img src="https://videoappc7ba0595c12e4738bd19fe875e92d417233351-production.s3.ap-south-1.amazonaws.com/public/verify.png" alt="img">
<br/>

* When video's are uploaded but user is not authenticated (Public View)
<br/><br/>
<img src="https://videoappc7ba0595c12e4738bd19fe875e92d417233351-production.s3.ap-south-1.amazonaws.com/public/Public.png" alt="img">

* User's Dashboard with all video's and video's uploaded by him
<br/><br/>
<img src="https://videoappc7ba0595c12e4738bd19fe875e92d417233351-production.s3.ap-south-1.amazonaws.com/public/Loggedinuser.png" alt="img">
<br/>