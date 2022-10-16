package com.myalami

import android.annotation.SuppressLint
import android.provider.Settings
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class DeviceInfo(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var deviceID = ""

    override fun getName() = "DeviceInfo"

    @SuppressLint("HardwareIds")
    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getDeviceId(callback: Callback) {
        deviceID = Settings.Secure.getString(
            reactApplicationContext.contentResolver,
            Settings.Secure.ANDROID_ID
        )
        callback.invoke(deviceID)
    }

}