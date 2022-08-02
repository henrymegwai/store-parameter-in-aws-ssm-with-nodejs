# Node.js & AWS: Saving and Retrieving Secrets Safe with AWS Systems Manager Parameter Store


- Create IAM Policy
Go to https://console.aws.amazon.com/iam/home

Go to Policies and click the Create Policy button

Select the JSON tab and paste the following policy:


`{ 
   "Version":"2012-10-17",
   "Statement":[ 
      { 
         "Action":[ 
           "ssm:GetParameter",        
           "ssm:PutParameter"
         ],
         "Effect":"Allow",
         "Resource":"arn:aws:ssm:*:*:*"
      }
   ]
}`



- Create IAM User
Go to https://console.aws.amazon.com/iam/home

Go to Users and click the Add User button

Enter a username

Select Programmatic access for the Access Type and click Next

Select Attach Existing Policies Directly for Permissions

Check the policy created previously and click Next

(Optional) Add tags and click Next

Save the Access Key and Secret Key (this is the only time the secret key will be shown)
