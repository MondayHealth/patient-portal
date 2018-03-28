#!/bin/bash

CL_DIST_ID=E13U00LONPLKVG

npm run build
cd build
aws s3 sync . s3://patient.monday.health --delete --acl public-read

echo ""
echo "Invalidating CloudFront. If this fails, you likely didnt wait long enough"
echo "after the last one. It needs not to be 'In Progress'."
echo ""

aws cloudfront create-invalidation --distribution-id ${CL_DIST_ID} \
  --paths / /index.html

