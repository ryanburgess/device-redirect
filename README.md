# Device Redirect
Device detection redirect script. Good for links in emails that need to change depending on device.

##Install
Run `npm install`
Run `gulp scripts compress` to build the files.

##Use
Open `index.html` and pass in url paramters like this example: `index.html?url=netflix.com&ios=nextflix.com/ios&android=nextflix.com/android&code=foo`. The default `url` parameter is required.

##Device Parameters
You have the option to pass in separate URLs for each device. If don't pass a URL for each device it will redirect to the default `url` value.
- iOS
- Android
- Windows
- Mac
- Linux

## Contributing
1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
