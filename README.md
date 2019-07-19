# Wepback TS loader declaration import issue

## Current behavior
When building both packages the inferred lerna package import in the declaration files of typescript in the `my-package` package are converted to a relative import.

## Expected behavior
These imports that reference a lerna package and are not explicitly specified should not be changed to a relative import and instead should remain a module import.

## Why is this a webpack issue
If you build the `my-package` package with `tsc` only, no webpack, resulting declarations are correctly not changed to relative imports.