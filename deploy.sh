#!/bin/bash
CL_DIST_ID=E13U00LONPLKVG
npm run build
cd build
aws s3 sync . s3://patient.monday.health --delete
aws cloudfront create-invalidation --distribution-id ${CL_DIST_ID} \
  --paths / /index.html

