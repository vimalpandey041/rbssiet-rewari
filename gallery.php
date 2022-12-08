<?php
include("header.php");
?>
<!---- header image start -->
<div class="container-fluid m-0 p-0 header-img">
  <nav aria-label="breadcrumb" class="breadcrumb-img">
    <span>Gallery</span>
    <ol class="breadcrumb text-white">
      <li class="breadcrumb-item text-white"><a href="index2.php">Home</a></li>
      <li class="breadcrumb-item text-white"><a href="contact.php">Media</a></li>
      <li class="breadcrumb-item active text-white" aria-current="page"><span>Gallery</span></li>
    </ol>
  </nav>
  <img src="https://c1.wallpaperflare.com/preview/443/122/419/book-pile-stack-literature.jpg" alt="">


</div>
<!---- header image end -->

<div class="x-container">
  <div class="x-gallery bg-dark">
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