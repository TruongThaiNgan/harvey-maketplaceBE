import { NextFunction, Request, Response } from 'express';

export const getFashionProduct = async (req: Request, res: Response, next: NextFunction) => {
  const listProduct = [
    {
      id: '1',
      sourceImage:
        'https://lh3.googleusercontent.com/0yhNSyuuUr8xJYojxvhyLm6YRc7EqsjAMLMHK6fzcj7rgZNFmWFY1Wq_BPmVvbwcPMmiVA5Sn3zAbuZkiUzUVUygh-Igohh3hg2rr-UpOogiY9UperEKwirb5NLIv3rlsKf_XTBF5LDs9cC3gaK7PENzYfjF5zplV4gDFpE9hugnX_f5MYEUhw8Va54DjRW-FnvirCOOt6oPvMslYrzazTytT5FLIlVSP3hnIeaCqV_xjIO9_rUJZcY7I37aHgMbu8CrDsFGt8ThQMBybKfQn4hYZjNeJgdDtZGNBLdNfrPxKmQGOZ4YrsrkRpc7m-az8xGiw65QUGKcOaz8zviGFdJknXSErCBEl1d1pav6gM84TCXihFzhD8kg3gprcCRjDEg4FfeDfqgoyF4JREmONPYkY6P8WDGjCWfwq-cdXXL-_bwPvPmVqpZhl5NM9Qq5ir6xw3HOwT6sKyccFhP59QrwzO6F-svmFCr0yQM1mcjkkrnlF4pnRaoeOWld02pZeP5JYgtJoht3HSrbIcmUkzJvnj9RsRFzpGxURCElyKYY7WyhXMxf5iVMakUITFJSVMe8pOfcYzH4hWA-bEWlFkj900T6A8AL2hwb-FaKyhw47mWzTnhvq_y1wBhS2VGCpuou9PtFreupZR4AMw4wkcR-oXFLNkvOQMkxmHftpxibXEqX6rqcEy1bGJIpCYAMnVeGCRC9sXi2LucayNCfbA=w296-h368-no?authuser=0',
      favorite: false,
      voteNumber: 10,
      brandName: 'Dorothy Perkins',
      productName: 'Evening Dress',
      oldPrice: '15$',
      newPrice: '12$',
      starNumber: 3,
    },
    {
      id: '2',
      sourceImage:
        'https://lh3.googleusercontent.com/XVE_VO5J0PZVgg4xgDlZgocLEF3erp1b4gRcCdt8ZEhfm05l5Gs8jxSNYdQv5lDBqQjOrCIG170yb7r3khiSooMs6ILpjHoEGoeXCJFaoBSAh7_zJo5xrFlSwvgNk74hxpSqSqIwylt44DuL1Rt6tpQshg2CDlwQv9gTZlGxXGDpb5cvh5USQkrBUQCKKRK8TW2AhfjkjBKFauPZKg0g7wkhO_zRQKy_HhnLFVdgXk9zGqHI4D3DpJyG1PV6AARJSl4dqcF3JT9RA2f7AkOBwM6gjlc39iyIKgIP3IeiDvrfIKPa74NT0hpRCIVPerjxAlo5RcOqB6ms4WmZTCyCOds40yLJ5I2wEW_eZX9IfMMrxvQjZSfMG_yWMHxTlZosf8bLWA89SYFTZ-EMBZSVwGsNppqiy7t26kn72vbZ9owUG8X1SR42af5FQXETATsgJAmQwHabVHkTKTdjY6QCJCYMFA8IUH3TsSS7FmeMHMMTi9U4VoM-hNsdvnjmbE7yNxgb0Z224l8tw0TB9mpmESbB5iL_23jESeFHMLyts6ESzXGrQgXMdzl8ywPuSTZlgavkTSmz_OFW7pxBZElzS2lN_9StwRvEbVkhRsaNCI0oido08AQUQs7OA4-WKTq249nWxLu_H2L3ZzJzDA2SSZcDs1i3DmGvovRzDmpq_LNQ5LjcUwE_3Id2cOV3FOrbii2953h2-ms7g2wF9qXSCg=w296-h368-no?authuser=0',
      favorite: false,
      voteNumber: 10,
      brandName: 'Dorothy Perkins',
      productName: 'Evening Dress',
      oldPrice: '15$',
      newPrice: '12$',
      starNumber: 3,
    },
    {
      id: '3',
      sourceImage:
        'https://lh3.googleusercontent.com/dQBHpOJ2LQnsMAk3n1-oUcrciN0VZmJpHnwgrn4l_BHGmAZJAPhVETq5emmVizW-rteIMiL3AgG3TjIBnY70bKkt4zm6GAE1LqbUBzB8MvGiX5WSKads962SJU7ank1aa6qSq0Ubp8JmBhm8qOTPCL7yJ2nJS8uWOf-_TkHRzhzcA2rCymSNgWjNm0xazOovWtgiGBmychAaNcng1ns1TfLm8LCmgRgYLZYUEclO3RR-UDPLbMsLd8BYiFPcyMBmq4IYp8jCfVzyJWgXPBfm9MfvJPaYaSelGacXxordDHhIA2EKHyYZ66sMR8TcO_z5b4o7LPdgvxYw7r1i4coxwSzGtwaG1FQVy94yNgdjii07KXkawkmOby-CDOTUgvqJjZLRVIS_vRwrvgkaMZ9zmNB-G9ElP6pvjAF-NDkGe5Glqv_WyQVWbDxZ9lMJHrkG7669sfub5eOjVZxAehZzOAectqwqD3UHSfNQEj7p8Jz7c_C7X29RHx7mQkSkwZV_RKMIVPySr_gfwjezaClQN2AijXYw2YqmPiVtZMnvmRxErt6XJxquF_Uflp3Rlag04n0h7yTOdU3YvwA2w3GrJcvGtTV6hA4ntxSaEoqp7HVWKj9zW7dNjOvV3TP-ah31EqzTK7UMr_GpfMNjdRGwJY_-0oUHQxUB9YXr75Pwn4hFlb_27T6z_go9Lju_7O0loG9uRQzJ78ACWO-NKhL0Zg=w296-h368-no?authuser=0',
      favorite: false,
      voteNumber: 10,
      brandName: 'Dorothy Perkins',
      productName: 'Evening Dress',
      oldPrice: '15$',
      newPrice: '12$',
      starNumber: 3,
    },
    {
      id: '4',
      sourceImage:
        'https://lh3.googleusercontent.com/dQBHpOJ2LQnsMAk3n1-oUcrciN0VZmJpHnwgrn4l_BHGmAZJAPhVETq5emmVizW-rteIMiL3AgG3TjIBnY70bKkt4zm6GAE1LqbUBzB8MvGiX5WSKads962SJU7ank1aa6qSq0Ubp8JmBhm8qOTPCL7yJ2nJS8uWOf-_TkHRzhzcA2rCymSNgWjNm0xazOovWtgiGBmychAaNcng1ns1TfLm8LCmgRgYLZYUEclO3RR-UDPLbMsLd8BYiFPcyMBmq4IYp8jCfVzyJWgXPBfm9MfvJPaYaSelGacXxordDHhIA2EKHyYZ66sMR8TcO_z5b4o7LPdgvxYw7r1i4coxwSzGtwaG1FQVy94yNgdjii07KXkawkmOby-CDOTUgvqJjZLRVIS_vRwrvgkaMZ9zmNB-G9ElP6pvjAF-NDkGe5Glqv_WyQVWbDxZ9lMJHrkG7669sfub5eOjVZxAehZzOAectqwqD3UHSfNQEj7p8Jz7c_C7X29RHx7mQkSkwZV_RKMIVPySr_gfwjezaClQN2AijXYw2YqmPiVtZMnvmRxErt6XJxquF_Uflp3Rlag04n0h7yTOdU3YvwA2w3GrJcvGtTV6hA4ntxSaEoqp7HVWKj9zW7dNjOvV3TP-ah31EqzTK7UMr_GpfMNjdRGwJY_-0oUHQxUB9YXr75Pwn4hFlb_27T6z_go9Lju_7O0loG9uRQzJ78ACWO-NKhL0Zg=w296-h368-no?authuser=0',
      favorite: false,
      voteNumber: 10,
      brandName: 'Dorothy Perkins',
      productName: 'Evening Dress',
      oldPrice: '15$',
      newPrice: '12$',
      starNumber: 3,
    },
  ];
  return res.status(200).json({
    message: 'get success',
    status: 200,
    listProduct,
  });
};
