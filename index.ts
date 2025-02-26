import * as aws from "@pulumi/aws";

const BUCKET_NAME = "first-test-ftr";

const bucket = new aws.s3.BucketV2(BUCKET_NAME, {
  bucket: BUCKET_NAME,
  tags: {
    IAC: "true",
  },
});

export const bucketName = bucket.id;
export const bucketArn = bucket.arn;
export const bucketRegion = bucket.region;
