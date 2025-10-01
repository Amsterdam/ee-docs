#!/usr/bin/env sh

set -eux

if [ $1 == "npm" ]; then
    npm install
fi

exec $@
