# OpenWebProject Glyphicons

## Bootstrap glyphicons(only) with added features

I had need for Bootstrap glyphicons in projects with other styling so I used the bootstrap.css files ([Original source](https://getbootstrap.com/docs/3.4/)) and removed everythng except the glyphicons stylings.

## Includes
* Bootstrap 3 glyphicons
* Extra none/invisible glyph in `glyphicon-none.css`
* React component in `index.js`

## Installation
`npm install owp.glyphicons --save`

## Usage css only
```javascript
import "owp.glyphicons/glyphicons.min.css";
//OR
import "owp.glyphicons/glyphicons.css";
```

## Usage glyphicon-none
```javascript
import "owp.glyphicons/glyphicons-none.css";
```

## Usage React component
```javascript
import Glyph from "owp.glyphicons";
<Glyph type="plus"/>
```

## License
All rights belongs to Bootstrap and the intent to produce this package is non commercial and non profit.