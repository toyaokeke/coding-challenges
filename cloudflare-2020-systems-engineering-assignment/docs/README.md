## Getting Started

### Pre-Requisites

1. [CMake (3.x minimum)](https://cmake.org/)
   This tool will build and compile the project

2. C++ compiler
   - Windows: [MinGW](http://www.mingw.org/) is recommended
   - Mac: XCode / Clang. A comprehensive link on how to install can be found [here](https://www.freecodecamp.org/news/how-to-download-and-install-xcode/)

All code in this project follows the C++14 Standard

### How to Install

1. In the root of the directory, run the following code:

```shell
cmake .
make
```

2. Run the auto-generated executable using the following:

```shell
./systems-engg-cli-tool
```

This will display the following:

```shell
<==== Toya Okeke's Clouflare 2021 New Grad Systems Assignment ====>
This CLI tool will make an HTTP request to your specified URL and print the response directly to the console
use '--help' to see the list of commands
```

## Running the Software

### `./systems-engg-cli-tool --url <url-link>`

### `./systems-engg-cli-tool --url <url> --profile <num-requests>`

### `./systems-engg-cli-tool --help`

**IMPORTANT:** the `--profile` command **_MUST_** be used together with the `--url` command

## Sample Ouputs

### Tested Against Cloudflare Worker from [General Assignment](https://github.com/toyaokeke/coding-challenges/tree/main/cloudflare-2020-general-engineering-assignment)

### Tested Against Other Websites
