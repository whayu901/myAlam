//
//  DeviceInfo.swift
//  MyAlami
//
//  Created by Wahyu Setiawan on 16/10/22.
//

import Foundation

@objc(GetUniqueId)
class GetUniqueId: NSObject {
  
  private var deviceID = "";
  
  @objc
  func getId(_ callback: RCTResponseSenderBlock) {
    if let identifierForVendor = UIDevice.current.identifierForVendor {
      deviceID = identifierForVendor.uuidString
      callback([deviceID])
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  func constantsToExport() -> [String: Any] {
    return ["initialDeviceID": ""]
  }
  
}
