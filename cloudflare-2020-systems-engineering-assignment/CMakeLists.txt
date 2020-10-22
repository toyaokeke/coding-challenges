cmake_minimum_required(VERSION 3.0)
project(systems-engg-cli-tool)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++14")
set(SOURCE_FILES
 ./src/main.cpp
 ./src/RequestHandler.h
 ./src/RequestHandler.cpp
 )
add_executable(${PROJECT_NAME} ${SOURCE_FILES})