
// the color input must be trimmed before (without whitespace at both end)
function cssColorSyntaxValidator(colorInput) {
  // regex source (verified and corrected): https://gist.github.com/olmokramer/82ccce673f86db7cda5e
  /* eslint-disable-next-line no-useless-escape */
  const cssSyntaxRegex = /(?:#(?:[0-9a-f]{2}){2,4}$|#[0-9a-f]{3}$|(?:rgba?|hsla?)\((?:\d+%?(?:deg|rad|grad|turn)?(?:,|\s)+){2,3}[\s\/]*[\d\.]+%?\)$|black$|silver$|gray$|whitesmoke$|maroon$|red$|purple$|fuchsia$|green$|lime$|olivedrab$|yellow$|navy$|blue$|teal$|aquamarine$|orange$|aliceblue$|antiquewhite$|aqua$|azure$|beige$|bisque$|blanchedalmond$|blueviolet$|brown$|burlywood$|cadetblue$|chartreuse$|chocolate$|coral$|cornflowerblue$|cornsilk$|crimson$|darkblue$|darkcyan$|darkgoldenrod$|darkgray$|darkgreen$|darkgrey$|darkkhaki$|darkmagenta$|darkolivegreen$|darkorange$|darkorchid$|darkred$|darksalmon$|darkseagreen$|darkslateblue$|darkslategray$|darkslategrey$|darkturquoise$|darkviolet$|deeppink$|deepskyblue$|dimgray$|dimgrey$|dodgerblue$|firebrick$|floralwhite$|forestgreen$|gainsboro$|ghostwhite$|goldenrod$|gold$|greenyellow$|grey$|honeydew$|hotpink$|indianred$|indigo$|ivory$|khaki$|lavenderblush$|lavender$|lawngreen$|lemonchiffon$|lightblue$|lightcoral$|lightcyan$|lightgoldenrodyellow$|lightgray$|lightgreen$|lightgrey$|lightpink$|lightsalmon$|lightseagreen$|lightskyblue$|lightslategray$|lightslategrey$|lightsteelblue$|lightyellow$|limegreen$|linen$|mediumaquamarine$|mediumblue$|mediumorchid$|mediumpurple$|mediumseagreen$|mediumslateblue$|mediumspringgreen$|mediumturquoise$|mediumvioletred$|midnightblue$|mintcream$|mistyrose$|moccasin$|navajowhite$|oldlace$|olive$|orangered$|orchid$|palegoldenrod$|palegreen$|paleturquoise$|palevioletred$|papayawhip$|peachpuff$|peru$|pink$|plum$|powderblue$|rosybrown$|royalblue$|saddlebrown$|salmon$|sandybrown$|seagreen$|seashell$|sienna$|skyblue$|slateblue$|slategray$|slategrey$|snow$|springgreen$|steelblue$|tan$|thistle$|tomato$|transparent$|turquoise$|violet$|wheat$|white$|yellowgreen$|rebeccapurple$)/i;

  const syntaxMatch = colorInput.match(cssSyntaxRegex);

  return (syntaxMatch && syntaxMatch.index === 0);
}

// inspired by https://stackoverflow.com/questions/11068240/what-is-the-most-efficient-way-to-parse-a-css-color-in-javascript
// to be used only in the Browser!
function colorToRgbParser(cssColor) {
  const div = document.createElement('div');
  div.id = 'for-computed-style';
  div.style.color = cssColor;
  document.querySelector('body').appendChild(div);
  const match = getComputedStyle(div).color.match(/^rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d\.\d)\s*)?\)$/i);
  document.querySelector('#for-computed-style').remove();
  if (match) {
    // match[0] is regex complete match (e.g. "rgb(0,0,0)"), not regex capturing groups
    let parsedColor = {
      r: match[1],
      g: match[2],
      b: match[3]
    };
    if (match[4]) { // if alpha channel is present
      parsedColor.a = match[4];
    }
    return parsedColor;
  } else {
    throw new Error(`Color ${cssColor} could not be parsed.`);
  }
}

// to calculate (approximatively?) luminance of a color with alpha-channel
// and placed on another background color
function luminanceWithAlphaAndBackground(r, g, b , a, backgroundLum) {
  const lum = luminance(r,g,b);
  if (a !== undefined) {
    return (lum * a) + (backgroundLum * (1 - a));
  } else {
    return lum;
  }
}

// luminance and contrast: from https://stackoverflow.com/questions/9733288/how-to-programmatically-calculate-the-contrast-ratio-between-two-colors
// based on https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef

// white (255, 255, 255) have relative luminance = 1
// black (0, 0, 0) have relative luminance = 0
function luminance(r, g, b) {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928
        ? v / 12.92
        : Math.pow( (v + 0.055) / 1.055, 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// function contrast(rgb1, rgb2) {
//   const lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
//   const lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
//   const brightest = Math.max(lum1, lum2);
//   const darkest = Math.min(lum1, lum2);
//   return (brightest + 0.05) / (darkest + 0.05);
// }

const whiteLum = luminance(255, 255, 255);

// to get a grey text that can contrast with the background color.
// under the background there is a default layer of white to be able to calculate
// background luminance in case alpha channel is present in background color
function gridContrastedGrey(cssColor) {
  let rgb;
  try {
    rgb = colorToRgbParser(cssColor);
  } catch (error) {
    console.log(error);
    // fallback: grid full white
    return [255, 255, 255];
  }
  const lum = luminanceWithAlphaAndBackground(rgb.r, rgb.g, rgb.b, rgb.a, whiteLum);
  // grey values empirically obtained by commented test below
  return lum > 0.5 ? [137, 137, 137] : [225, 225, 225];
}

// to get a grey grid that can contrast with the background color.
// under the background there is a default layer of white to be able to calculate
// background luminance in case alpha channel is present in background color
function textContrastedGrey(cssColor) {
  let rgb;
  try {
    rgb = colorToRgbParser(cssColor);
  } catch (error) {
    console.log(error);
    // fallback: text full black
    return [0, 0, 0];
  }
  const lum = luminanceWithAlphaAndBackground(rgb.r, rgb.g, rgb.b, rgb.a, whiteLum);
  // grey values empirically obtained by commented test below
  return lum > 0.5 ? [108, 108, 108] : [237, 237, 237];
}

// function luminanceTests() {
//   console.log('0.85 luminance grey : ' + luminance(237, 237, 237));
//   console.log('0.75 luminance grey : ' + luminance(225, 225, 225));
//   console.log('0.5 luminance grey : ' + luminance(188, 188, 188));
//   console.log('0.25 luminance grey : ' + luminance(137, 137, 137));
//   console.log('0.15 luminance grey : ' + luminance(108, 108, 108));
// }

// function luminanceWithAlphaTest() {
//   const testArray = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0.1],
//     [0, 0, 0, 1],
//     [255, 255, 255, 0],
//     [255, 255, 255, 1],
//     [200, 200, 200, 0],
//     [200, 200, 200, 1],
//     [200, 200, 200, 0.8],
//     [200, 200, 200, 0.2],
//     [50, 50, 50, 0.8],
//     [50, 50, 50, 0.2]
//   ];
//   testArray.forEach((values, index) => {
//     console.log('Test ' + (index + 1) + ' -- lum: ' + luminance(values[0], values[1], values[2]) + ' / alpha: ' + values[3] + ' / luminanceWithAlpha: ' + luminanceWithAlphaAndBackground(values[0], values[1], values[2], values[3], 1));
//   });
// }

export { cssColorSyntaxValidator, gridContrastedGrey, textContrastedGrey };
