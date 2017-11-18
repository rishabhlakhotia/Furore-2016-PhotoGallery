 src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async='async'>


    var OneSignal = window.OneSignal || [];
    OneSignal.push(["init", {
      appId: "b4e56c04-efc0-45ee-b4cd-fb79e4b3e4b7",
      autoRegister: true, /* Set to true to automatically prompt visitors */
      subdomainName: 'furoregallerydsce.onesignal.com',
      /*
      subdomainName: Use the value you entered in step 1.4: http://imgur.com/a/f6hqN
      */
      httpPermissionRequest: {
        enable: true
      },
      notifyButton: {
          enable: true /* Set to false to hide */
      }
    }]);
