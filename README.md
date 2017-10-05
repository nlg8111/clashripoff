# clashripoff
Mobile game

## Deployment to stores.
NOTE: Keys etc are not stored in the repo, ask for them.

* Install fastlane `brew cask install fastlane` (APPEND IT TO YOUR $PATH!)
* Put clashripoff.keystore -file into `android/app`
* Put `clashripoff_key` and `clashripoff_keystore` into your keychain
* Put Service account -json into `android/app/google-service-account-fastlane.json`
* Get access to private certificate repo (And it's encryption key)
* Get access to iOS developer portal

### Android
* `cd android`
* `fastlane <alpha|beta|production>`

### iOS
* `cd ios`
* `fastlane beta`