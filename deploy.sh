#!/bin/bash
npm run build
git add dist -f
git commit -m "deploy script working!"
git subtree push --prefix dist origin gh-pages