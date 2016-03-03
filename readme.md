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

1. Amazon Kindle Fire device
2. Install [App Tester](http://www.amazon.com/Amazon-App-Tester/dp/B00BN3YZM2/ref=sr_1_1?ie=UTF8&qid=1456971495&sr=8-1&keywords=app+tester)
3. Upload a JSON Data File to device

    ```
    $ adb push [Your_JSON_File_Folder]/amazon.sdktester.json /mnt/sdcard/
    ```

Here is more information: [https://developer.amazon.com/public/apis/earn/in-app-purchasing/docs-v2/installing-and-configuring-app-tester](https://developer.amazon.com/public/apis/earn/in-app-purchasing/docs-v2/installing-and-configuring-app-tester)

----

# 中文

此用例演示亚马逊的 Android 内购功能。

## 前提
1. Amazon Kindle Fire 设备
2. 安装 [Amazon App Tester](http://www.amazon.com/Amazon-App-Tester/dp/B00BN3YZM2/ref=sr_1_1?ie=UTF8&qid=1456971495&sr=8-1&keywords=app+tester) 应用
3. 把 json 文件上传到设备上

    ```
    $ adb push [Your_JSON_File_Folder]/amazon.sdktester.json /mnt/sdcard/
    ```


## 克隆仓库
```
git clone https://github.com/sdkbox/sdkbox-amazon-sample.git
cd sdkbox-amazon-sample
git submodule update --init
```

## 编译运行
cpp 为例:

```
cd cpp
cocos run -p android
```
