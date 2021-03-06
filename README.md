# OpenWebProject Glyphicons

**Bootstrap glyphicons(only) with added features**

I had need for Bootstrap glyphicons in projects with other styling so I used the bootstrap.css files ([Original source](https://getbootstrap.com/docs/3.4/)) and removed everything except the glyphicons stylings.

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
import "owp.glyphicons/glyphicon-none.css";

<span class="glyphicon glyphicon-none"></span>
```

## Usage React component
```javascript
//Imports component and all css styles
import Glyph from "owp.glyphicons";
//Imports just the react component
import Glyph from "owp.glyphicons/Glyph";

<Glyph type="plus"/>
```

## License
All rights belongs to Bootstrap and the intent to produce this package is non commercial and non profit.