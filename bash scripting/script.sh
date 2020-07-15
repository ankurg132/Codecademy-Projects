#!/bin/bash
echo "Welcome to the coding experience"
firstline=$(head -n 1 source/changelog.md)
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}
echo "Version:" $version
echo "Would you like to continue ? (1 or 0)"
read versioncontinue

if [ $versioncontinue -eq 1 ]
  then
    echo "OK"
    for file in source/*
      do
        if [ $file == "source/secretinfo.md" ]
        then
          echo "Not copying:" $file
        else
          echo "Copying:" $file
          cp $file build/.
        fi
      done
    cd build/
    echo "Build version $version contains:"
    ls
    cd ..
  else
    echo "Please come back when you are ready"
fi