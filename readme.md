# SDKBOX Plugin Sample with cocos framework 3.6

This is a sample project for SDKBOX xxxxxx plugin

* `cpp` contains sample for cocos2d-x c++ sample project
* `js` contains sample for cocos2d-x js sample project
* `lua` contains sample for cocos2d-x lua sample project

## Getting Started
* Get the cocos framework as a submodule: `git submodule update --init`
* If you have Cocos installed already, you can also just link to it without downloading the submodule: `ln -sv /Applications/Cocos/frameworks/cocos2d-x-3.6 cocos2d-x-3.6-lib`

## Build
* Compile and run iOS/Android samples using `cocos compile -p ios` or `cocos compile -p android`.
* (iOS only) Open `cpp/proj.ios_mac/cpp.xcodeproj`, `js/frameworks/runtime-src/proj.ios_mac/js.xcodeproj`, or `lua/frameworks/runtime-src/proj.ios_mac/lua.xcodeproj` in xcode, compile and run.

## Requirements

* Amazon Kindle Fire device
* Installer App Tester
* Obtaining a JSON Data File

    ```
    $ adb push [Your_JSON_File_Folder]/amazon.sdktester.json /mnt/sdcard/
    ```

Here is more information: [https://developer.amazon.com/public/apis/earn/in-app-purchasing/docs-v2/installing-and-configuring-app-tester](https://developer.amazon.com/public/apis/earn/in-app-purchasing/docs-v2/installing-and-configuring-app-tester)
