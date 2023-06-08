<script>
    import Cropper from "svelte-easy-crop";
    import { getCroppedImg } from "./canvasUtils"
      
      let image, fileinput, pixelCrop, croppedImage;
      
      const defaultSrc = "https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg";
      
      function onFileSelected(e) {
        let imageFile = e.target.files[0];
          let reader = new FileReader();
          reader.onload = e => {
              image = e.target.result
          };
          reader.readAsDataURL(imageFile);
      }
  
      let profilePicture, style;
          
      function previewCrop(e){
          pixelCrop = e.detail.pixels;
          const { x, y, width } = e.detail.pixels;
          const scale = 200 / width;	
          profilePicture.style=`margin: ${-y*scale}px 0 0 ${-x*scale}px; width: ${profilePicture.naturalWidth * scale}px;`
      }
      
      async function cropImage(){
          croppedImage = await getCroppedImg(image, pixelCrop);
      }
      
      function reset() {
          croppedImage = null;
          image = null;
      }

  </script>
  
  {#if !image}
      <input type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
      <button type="button" on:click={() => {image = defaultSrc}}>Click me!</button>
  {:else}
      <div style="position: relative; width: 100%; height: 50%;">
          <Cropper
              {image}
              aspect={1}
              zoom=1
              crop={{x:0, y:0}}
              on:cropcomplete={previewCrop}
          />
      </div>
      <h2>Preview</h2>
      <div class="prof-pic-wrapper">
          <img
              bind:this={profilePicture}
              class="prof-pic"
              src={image}
              alt="Profile example"
              {style}
          />
      </div>
      {#if croppedImage}
          <h2>Cropped Output</h2>
          <img
              src={croppedImage}
              alt="Cropped profile"
          /><br>
      {:else}
      <br><button type="button" on:click={async () => {croppedImage = await getCroppedImg(image, pixelCrop), console.log(croppedImage)}}>Crop!</button>
      {/if}
      <button type="button" on:click={reset}>Start over?</button>
  {/if}
  
  <style>
      .prof-pic-wrapper{
          height: 200px;
          width: 200px;
          position: relative;
          border: solid;
          overflow: hidden;
      }
      
      .prof-pic{
          position: absolute;
      }
      :global(.cropperArea) {
        border-radius: 100%;
      }
      :global(.grid.svelte-12kodkg:before) {
        border: none !important;
      }
      :global(.grid.svelte-12kodkg:after) {
        border: none !important;
      }
  </style>