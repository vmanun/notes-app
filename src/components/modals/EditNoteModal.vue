<template>
  <div :class="`${showModal}`">
    <div class="modal-background" @click="closeModal(false)"></div>
    <div class="modal" :class="`${this.modNote.color}`">
      <div class="modal-heading">
        <input
          type="text"
          name="title"
          id="note-title"
          v-model="modNote.title"
          placeholder="Enter the title"
        />
        <img
          src="../../assets/img/close.png"
          class="close-modal"
          alt="Close the note"
          width="20"
          height="20"
          @click="closeModal(false)"
        />
      </div>
      <hr />
      <h2 class="title">Content</h2>
      <textarea
        class="modal-content"
        name="content"
        id="note-content"
        v-model="modNote.content"
        placeholder="Enter the content of the note"
      ></textarea>
      <h2 class="title">Attached Images</h2>
      <ul v-if="modNote.images === undefined || modNote.images.length" class="modal-images-cont">
        <li v-for="(image, index) in modNote.images" :key="index">
          <a :href="image" target="_blank" rel="noopener noreferrer" class="modal-images">
            <img :src="image" alt="Attached image - click to see" class="modal-image" />
            <!-- Temporal way of getting the img's filename -->
            <i>{{ image.substr(image.lastIndexOf("/") + 1).split("?")[0] }}</i>
          </a>
          <img
            src="../../assets/img/close.png"
            class="remove-image"
            alt="Close the note"
            width="15"
            height="15"
            @click="removeImage(index)"
          />
        </li>
      </ul>
      <p v-else class="no-images">There's no images to show</p>
      <div class="modal-foot">
        <div class="color-select" :class="openMenu('colors')">
          <img
            @click="toggleMenu('colors')"
            src="../../assets/img/color.png"
            alt="Pick a color"
            height="24px"
            width="24px"
          />
          <div
            class="white"
            :class="displayColors"
            v-if="colorAreShown"
            @click="changeColor('white')"
          ></div>
          <div
            class="aqua"
            :class="displayColors"
            v-if="colorAreShown"
            @click="changeColor('aqua')"
          ></div>
          <div
            class="green"
            :class="displayColors"
            v-if="colorAreShown"
            @click="changeColor('green')"
          ></div>
          <div
            class="yellow"
            :class="displayColors"
            v-if="colorAreShown"
            @click="changeColor('yellow')"
          ></div>
          <div class="red" :class="displayColors" v-if="colorAreShown" @click="changeColor('red')"></div>
          <div
            class="pink"
            :class="displayColors"
            v-if="colorAreShown"
            @click="changeColor('pink')"
          ></div>
          <img
            @click="toggleMenu('colors')"
            src="../../assets/img/close.png"
            alt="Close this menu"
            class="close-menu-btn"
            width="15"
            height="15"
            :class="displayColors"
            v-if="colorAreShown"
          />
        </div>
        <div class="img-add" :class="openMenu('images')">
          <img
            @click="toggleMenu('images')"
            src="../../assets/img/add-img.png"
            alt="Add an image"
            height="24px"
            width="24px"
          />
          <p v-if="imagesAreShown">URL</p>
          <input
            type="url"
            placeholder="https://www.example.com"
            v-model="newImage"
            v-if="imagesAreShown"
          />
          <img
            @click="putImage"
            class="arrow"
            src="../../assets/img/arrow.svg"
            alt="Add Image"
            width="20px"
            height="20px"
            v-if="imagesAreShown"
          />          
          <img
            @click="toggleMenu('images')"
            src="../../assets/img/close.png"
            alt="Close this menu"
            class="close-menu-btn"
            width="15"
            height="15"
            :class="displayImages"
            v-if="imagesAreShown"
          />
        </div>
      </div>
      <div class="save-note">
        <button alt="Save note" 
          @click="submitNote({ 
            note: JSON.parse(JSON.stringify(modNote)), 
            type: 'modify' 
          })">Save note</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    show: Boolean,
    note: Object
  },
  data() {
    return {
      modNote: {},
      colorAreShown: false,
      imagesAreShown: false,
      newImage: ""
    };
  },
  computed: {
    showModal() {
      // eslint-disable-next-line
      this.modNote = this.show
        ? JSON.parse(JSON.stringify(this.note))
        : this.modNote;
      return typeof this.show === "boolean" && this.show
        ? "shown"
        : "not-shown";
    },
    displayColors() {
      return this.colorAreShown ? "show-color" : "";
    },
    displayImages() {
      return this.imagesAreShown ? "show" : "";
    }
  },
  methods: {
    ...mapActions(['closeModal', 'submitNote']),
    removeImage(index) {
      this.modNote.images.splice(index, 1);
    },
    toggleMenu(menu) {
      if (menu === "colors") {
        this.colorAreShown = !this.colorAreShown;
        if (this.colorAreShown === true && this.imagesAreShown === true)
          this.toggleMenu("images");
      } else if (menu === "images") {
        this.imagesAreShown = !this.imagesAreShown;
        if (this.colorAreShown === true && this.imagesAreShown === true)
          this.toggleMenu("colors");
      }
    },
    openMenu(menu) {
      if (menu === "colors") return this.colorAreShown ? "open-menu" : "";
      else if (menu === "images") return this.imagesAreShown ? "open-menu" : "";
    },
    changeColor(color) {
      this.modNote.color = color;
      // eslint-disable-next-line
      console.log("in changeColor function " + this.modNote.color);
    },
    putImage() {
      try {
        new URL(this.newImage);
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
        return false;
      }
      this.modNote.images.push(this.newImage);
      this.toggleMenu("images");
      this.newImage = "";
    }
  },
  watch: {
    show() {
      if (this.colorAreShown) this.toggleMenu("colors");
      if (this.imagesAreShown) this.toggleMenu("images");
    }
  },
};
</script>

<style scoped>
/*Specific edit-modal rules*/
#note-title {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-size: 30px;
  font-weight: 700;
  margin: 10px 0 0 10px;
}

#note-title:focus {
  color: black;
}

#note-content {
  background-color: rgba(0, 0, 0, 0);
  border: none;
}

.no-images {
  text-align: center;
  font-size: 19px;
}

.remove-image {
  margin: -37px 15px 0px 0px;
  float: right;
  cursor: pointer;
}

.color-select,
.img-add {
  height: 35px;
  width: 35px;
  border-radius: 50px;
  cursor: pointer;
  transition: 200ms;
  text-align: center;
}

.color-select {
  margin-right: 15px;
}

.color-select > img,
.img-add > img {
  margin-top: 6px;
}

.color-select > div,
.close-color-picker-btn {
  opacity: 0;
  transition: opacity 100ms 200ms;
  border: black solid 1px;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  margin: 10px 6px 0 4px;
  padding: 0;
}

.color-select > .show-color {
  opacity: 1;
  transition: opacity 100ms 200ms;
}

.close-menu-btn {
  border: none;
  margin: 10px 5px 0 0 !important;
}

.open-menu,
.img-add.open-menu {
  display: inline-flex;
  align-content: center;
  justify-content: space-around;
  width: 215px;
}

.img-add.open-menu {
  width: 310px;
}

.img-add > input {
  border: none;
  border-radius: 7px;
  width: 166px;
  height: 20px;
  margin-top: 6.5px;
}

.img-add > p {
  margin: 8px -3px 0 0;
}

.img-add > .arrow {
  margin: 8px 0 0 0;
}

.save-note {
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
}

button {
  margin: auto;
}
</style>