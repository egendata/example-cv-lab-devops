#!/bin/bash

oc login $OPENSHIFT_URL --token=$OPENSHIFT_TOKEN --certificate-authority=/tmp/openshift.crt
echo "Redeploying..."
oc rollout latest lab-devops-cv -n mydata
oc logout
rm /tmp/openshift.crt