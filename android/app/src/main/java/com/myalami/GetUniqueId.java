package com.myalami;

import android.provider.Settings;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class GetUniqueId  extends ReactContextBaseJavaModule {
    GetUniqueId(ReactApplicationContext context) {
        super(context);
    }



    @Override
    public String getName() {
        return "GetUniqueId";
    }

    @ReactMethod
    public String getId() {
        String idDevice = Settings.Secure.getString(this.getCurrentActivity().getContentResolver(), Settings.Secure.ANDROID_ID);

        return idDevice;
    }


}
