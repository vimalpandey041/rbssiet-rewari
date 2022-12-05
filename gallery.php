<?php
include("header.php");
?>
 <div class="x-container">
        <div class="x-header">
          <div class="xh-inner">
            <div class="xh-content">
              <h1 class="xh-h1">Hi, im Tibix.</h1>
              <h2 class="xh-h2">and this is... my AI gallery</h2>
              <span class="xh-text">Enjoy fresh and hand-picked images that i've created using Midjourney AI.
                <br/>
                <br/>
                I will update this gallery with new images from time to time. If you enjoy what i'm creating, there's alot more on my Twitter.
              </span>
              <div class="x-socials">
                <a target="_top" href="https://www.twitter.com/Tiibiix" class="x-social" style="margin-right: 40px;">
                  <img class="x-social-img" src="https://assets.codepen.io/1692350/x_twitter.png">
                  <span>Tibix</span>
                </a>
                <a target="_top" href="https://www.twitter.com/def_not_ai" class="x-social">
                  <img class="x-social-img" src="https://assets.codepen.io/1692350/x_twitter.png">
                  <span>Def not AI</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      
      
        <div class="x-gallery">
          <div class="xg-tag-filter">
            <div class="xg-btn xg-btn-tag xg-btn-active" data-tag="all">Show All</div>
            <div class="xg-btn xg-btn-tag" data-tag="characters">Characters</div>
            <div class="xg-btn xg-btn-tag" data-tag="scenery">Scenery</div>
            <div class="xg-btn xg-btn-tag" data-tag="abstract">Abstract</div>
          </div>
          <div class="xg-container">
            <div class="xg-loader">
              <div class="xg-loader-text">sorting the gallery...</div>
            </div>
            <div class="xg-img-preview">
      
            </div>
          </div>
        </div>
      </div>  
<?php
include("footer.php");
?>