
# isometricks

isometricks is an easy isometric editor, for the browser.

It is still under development, but feel free to try it: https://isometricks.com (and for more details about what kind of editor it is and how to use it, please see the info tab there).

## Open source, and open to collaboration

This project is open to collaboration, and any comment is welcomed! Please open an issue for any bug, or to request/propose a feature.

Please also open an issue to discuss any change before pushing a PR (unless it's a very obvious correction), but I would really appreciate any contribution. Thanks!

This project is licensed under the GPL license.

## Under the hood

The frame of the editor is all compounded of SVG polygons, and works the following way: a transparent layer of equilateral triangles is placed in the foreground, and each triangle has a click listener. The user must have selected in the toolbar what face of the cube he wants to draw (left, upper or right face). A click on a transparent triangle will trigger, depending of the selected face, the drawing of the corresponding face in the drawing layer (each triangle can be half of the shape of the three possible faces).
The transparent clickable layer is in the foreground, the drawing layer in the middleground, and finally the grey lines grid is in the background.

The project is implemented with React, which supports SVG elements. With React, we can implement event listeners and programmable rendering on SVGs elements in a powerful way.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can use the different scripts it provides for local development (`npm start`), test (`npm test`) and build (`npm build`).

The web app is hosted in Github pages, with the help of [gh-pages](https://create-react-app.dev/docs/deployment/#github-pages).

The font used in the isometricks logo is [baloo](https://www.fontsquirrel.com/fonts/baloo), from fontsquirrel.

The icons used in the toolbar are made by [Freepik](https://www.flaticon.com/authors/freepik), [bqlqn](https://www.flaticon.com/authors/bqlqn), [Roundicons](https://www.flaticon.com/authors/roundicons) and [Those Icons](https://www.flaticon.com/authors/those-icons) from [www.flaticon.com](https://www.flaticon.com/), even if their SVGs are modified and/or embedded in code.

Copyright (C) 2019-2020  Nicolas Letellier
