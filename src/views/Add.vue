<template>
  <div class="add-view">
    <div class="wrapper">
      <div class="generic">
        <p class="item">Title</p>
        <textarea
          class="item-text"
          name="Title"
          id="add-title"
          rows="1"
          v-model="bookTitle"
          placeholder="Title"
        ></textarea>
        <p class="item">Author</p>
        <textarea
          class="item-text"
          name="Author"
          id="add-author"
          rows="1"
          v-model="bookAuthor"
          placeholder="Author"
        ></textarea>
        <div class="item">
            <star-rating :increment="0.1" @rating-selected="setRating"/>
        </div>
        <p class="item">URL (can be left empty for default)</p>
        <textarea
          class="item-text"
          name="URL"
          id="add-img"
          rows="1"
          v-model="bookImg"
          placeholder="Place Book Cover URL here"
        ></textarea>
        <p id="appology">
          (Sorry that it only takes URL's the next verssion will be better)
        </p>
      </div>
      <div class="genere">
        <p class="item">Genere</p>
        <div class="first-genere">
          <textarea
            class="item-text"
            name="genere"
            id="add-genere"
            rows="1"
            v-model="currentGenere"
            placeholder="Genere"
          ></textarea
          ><button class="plus" @click="addGenere()">+</button>
        </div>
        <div
          class="added-genere item"
          v-for="(genere, index) in bookGenere"
          :key="index"
        >
          <p>{{ genere }}</p>
          <button class="minus" @click="subtract(index)">-</button>
        </div>
      </div>
      <img class="uploaded-img" src="" alt="" />
    </div>
    <div class="sumbit-button">
      <button @click="upload" class="item">Add Book To List</button>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  data() {
    return {
      bookTitle: "",
      bookAuthor: "",
      bookRating: 0,
      bookGenere: [],
      bookImg: "",
      currentGenere: "",
    };
  },
  components: {
      StarRating
  },
  methods: {
    subtract(index) {
      this.bookGenere.splice(index, 1);
    },
    addGenere() {
      if (this.currentGenere) {
        this.bookGenere.push(this.currentGenere);
        this.currentGenere = "";
      }
    },
    setRating(rating) {
        this.bookRating = rating;
    },
    upload() {
        if(!(this.bookRating && this.bookTitle && this.bookAuthor && this.bookGenere.length)) {
            alert("All fields (except the image URL) are required")
        }
        else {
            let hasURL = true;
            if(!this.bookImg) {
                this.bookImg = "default.jpg"
                hasURL = false;
            }
            this.$root.$data.books.push({
                title: this.bookTitle,
                hasURL: hasURL,
                author: this.bookAuthor,
                rating: this.bookRating,
                generes: this.bookGenere,
                image: this.bookImg
            });
            alert(this.bookTitle + " was added.")
            this.bookTitle = this.bookAuthor = this.bookImg = "";
            this.bookGenere = [];
            
        }
    }
  },
};
</script>


<style scoped>
textarea {
  width: 100%;
}

.red {
  background-color: red;
  width: 100%;
  height: 400px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

.item {
  margin-top: 20px;
}

.minus {
  margin: 5px;
}
.first-genere {
  display: flex;
}
.plus {
  margin-left: 5px;
}

.added-genere {
  display: flex;
  justify-content: center;
}

/*large screens */
@media only screen and (min-width: 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .add-view {
    max-width: 960px;
    margin: auto;
  }
  .genere {
    margin-left: 20px;
  }
}

/*medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .add-view {
    max-width: 700px;
    margin: auto;
  }
}

/*small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .add-view {
    max-width: 500px;
    margin: auto;
  }
}

@media only screen and (max-width: 540px) {
  .add-view {
    max-width: 300px;
    margin: auto;
  }
}
</style>