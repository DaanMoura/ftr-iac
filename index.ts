import * as aws from "@pulumi/aws";

const BUCKET_NAME = "first-test-ftr";

const bucket = new aws.s3.BucketV2(BUCKET_NAME, {
  bucket: BUCKET_NAME,
  tags: {
    IAC: "true",
  },
});

const bucket2 = new aws.s3.BucketV2("second-bucket", {
  bucket: "second-bucket",
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  name: "primeiro-ecr",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

export const bucketName = bucket.id;
export const bucketArn = bucket.arn;
export const bucketRegion = bucket.region;

export const bucket2Name = bucket2.id;
export const bucket2Arn = bucket2.arn;
export const bucket2Region = bucket2.region;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
