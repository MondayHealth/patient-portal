#!/bin/bash

CL_DIST_ID=E13U00LONPLKVG

npm run build
cd build

echo ""
echo "Uploading build..."
aws s3 sync . s3://patient.monday.health --delete \
    --acl public-read \
    --exclude service-worker.js

echo "Uploading service-worker.js"
aws s3 cp ./service-worker.js s3://patient.monday.health/service-worker.js \
    --acl public-read \
    --metadata-directive REPLACE \
    --cache-control max-age=0,no-cache,no-store,must-revalidate

echo ""
echo "Invalidating CloudFront. If this fails, you likely didnt wait long enough"
echo "after the last one. It needs not to be 'In Progress'."
echo ""

aws cloudfront create-invalidation --distribution-id ${CL_DIST_ID} \
  --paths / /index.html /service-worker.js

