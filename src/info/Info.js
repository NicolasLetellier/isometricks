
import React from 'react';
import './Info.css';

function Info() {
  return(
    <div className="info-page">
      <h2>
        What is it?
      </h2>
      <p>
        isometricks.com is meant to be an easy-to-use digital counterpart of isometric paper, with the features of an editor, to be used directly in the browser (use it on mobile, tablet or desktop, with any OS).
      </p>
      <h2>
        And what for?
      </h2>
      <p>
        Isometric projections are an easy way to represent 3D shapes on a 2D image. With this editor, you can draw shapes based on basic isometric tiles (or "faces"). It can be used for quick prototyping of isometric designs, such as logos for example. Or just have fun with it, experimenting and drawing isometric shapes, illustrations or illusions!
      </p>
      <h2>
        How to use it?
      </h2>
      <p>
        The easiest isometric shape is a cube, you draw it with three faces: a left face, an upper face, and a right face. Just select the face you want to draw in the editor's toolbar, and click on the grid where you want to draw it. That's it!
      </p>
      <p>
        Current features are (in the order they appear in the toolbar):
      </p>
      <ul>
        <li>
          grid size selector
        </li>
        <li>
          download the current illustration as SVG file
        </li>
        <li>
          history backward and forward buttons
        </li>
        <li>
          face selector buttons
        </li>
        <li>
          configuration tool for faces' colors
        </li>
      </ul>
      <p>
        If you like this tool, please promote it!
        <em className="hashtag">
          #isometricks
        </em>
      </p>
      <h2>
        Free to use, open source and open to collaboration
      </h2>
      <p>
        This editor is free to use, doesn't require registration, and doesn't use any cookie (absolutely no data is stored).
      </p>
      <p>
        The code of this editor is open source and open to collaboration on Github. Feel free to <a href="https://github.com/NicolasLetellier/isometricks">have a look</a> and see how it works under the hood!
      </p>
      <h2>
        Some examples:
      </h2>
      <div>
        <img
          className="example-image"
          src="blueTriangleIllusion.svg"
          alt="Blue optical illusion"
        />
        <img
          className="example-image"
          src="redConstruction.svg"
          alt="Isometrick abstract construction in red"
        />
        <img
          className="example-image"
          src="isometricksFace.svg"
          alt="Representation of the purple face of the isometricks logo"
        />
      </div>
    </div>
  );
}

export default Info;
