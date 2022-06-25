#!/bin/bash

find ./ | entr -cnr go run .
