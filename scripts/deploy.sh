serverless deploy -v
stack_name=$(serverless info | grep stack: | awk '{print $2}')
echo ${stack_name}
aws cloudformation update-termination-protection --enable-termination-protection --stack-name ${stack_name}