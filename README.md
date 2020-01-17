# Group Project - Landmark Detector

REST API built with Express and mongoose.

## List of Routes

List of basic routes:

| Route       | HTTP | Header(s) | Body                                                       | Description              |

| ----------- | ---- | --------- | ---------------------------------------------------------- | ------------------------ |

| /upload/image  | POST  | token      | null                                                       |  upload to GCS and detect landmark|

| /user/login | POST | null      | name : STRING, email : STRING | get token               |

## Usage

Make sure you have Node.js and npm installed in your computer:

```

$ npm install

```
