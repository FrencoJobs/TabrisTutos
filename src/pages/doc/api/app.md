# app
The object `tabris.app` provides information about the application.
###### Example:
```
tabris.app.on("pause", function() { 
saveMyData(); 
});
```
###### Extends  `NativeObject` 
## Methods
### getResourceLocation(path)
 **Parameters:**
- **path:** string, the path of a resource relative to the application root.
**Returns:** `string`
Returns the URL for a given resource that is bundled with the app. Can be used to access app resources like images, videos, etc. Note that these resources can only be accessed in read-only mode.
### installPatch(url, callback)
__Parameters__:
- **url:** , `string`,the URL to fetch a patch from.
- **callback:** (error: Error|null, patch: any|null) => void, a callback function to be called when the installation has finished or failed. In case of a failure, the callback will receive a parameter `error` that contains an Error object. If the installation succeeds, this parameter will be `null`and a second parameter will contain the parsed content of the file `patch.json`from the installed patch.
>Note: this API is provisional and may change in a future release.

Installs a patch from the given URL. When the patch is successfully installed, it will remain inactive until the application is reloaded.
### reload()
Forces the running application to reload the main module and start over.
## Properties
### id
__Type__: string
Uniquely identifies the app.
### pinnedCertificates
__Type__: any[]
Enables certificate pinning for HTTP requests. When pinned certificates are defined for a host, connections to this host will only be permitted if the server provides a matching certificate. Connections to hosts that are not in the list are not affected.
Certificate pinning affects the following components: XHR/fetch, WebSockets, image loading and app patching. It does not affect WebViews.
The list of pinned certificates has to be in the form of` [{host: <string>, hash: <string>, algorithm: <RSA2048|RSA4096|ECDSA256>}, ..].`
The host attribute denotes the host name (including subdomain) of the host to be pinned (wildcards allowed).The hash attribute is the base64 encoded sha256 fingerprint of the subjectPublicKeyInfo, prefixed with sha256/.The algorithm attribute denotes the public key algorithm of the SSL certificate and can have the values RSA2048, RSA4096 or ECDSA256. This attribute is only required on iOS.
Example: `[{host: 'freegeoip.net', hash: 'sha256/eTPz+5X4FcoK5fW+I0Wt/9y2vOkU3UMmVnDs7yGUJf8', algorithm: 'RSA4096'}]`
For further details see 
https://www.owasp.org/index.php/Certificate_and_Public_Key_Pinning.
### version
__Type__: `string`
The user facing version number, e.g. '2.1-beta3'.
### versionCode
__Type__: `number`
An alternative version number used in app stores to identify different versions of an app. Usually incremented with each release. This property reflects the versionCode on Android and CFBundleVersion on iOS.
## Events
### "background" (app)
__Parameters:__
app: App
Fired when the app becomes invisible. Either because another app is in the foreground or the user has returned to the home screen.
### "backnavigation" (app, event)
__Parameters:__
app: Appevent: {preventDefault: Function}
Fired when the back button is pressed on Android. To suppress the default back navigation behavior, call `event.preventDefault().`
### "foreground" (app)
__Parameters:__
app: App
Fired when the app becomes visible. The event is only fired after the app has been brought to the background. Not during app startup.
### "pause" (app)
__Parameters:__
app: App
Fired when the app is not the interaction target of the user anymore. Usually preceded by resume.
### "resume" (app)
__Parameters:__
app: App
Fired when the app is visible and ready to interact with the user. The event is preceded by either foreground (the app becomes visible again) or pause (the app regains ability to interact with user).
### "terminate" (app)
__Parameters :__
app: App
Fired when the app is being destroyed. After this callback no more interaction with the app is possible.