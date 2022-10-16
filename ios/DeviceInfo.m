//
//  DeviceInfo.m
//  MyAlami
//
//  Created by Wahyu Setiawan on 16/10/22.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(DeviceInfo, NSObject)

RCT_EXTERN_METHOD(getDeviceID:(RCTResponseSenderBlock)callback)

@end
