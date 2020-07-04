const app = new Vue({
  el: "#app",
  data: {
    modal: false,
    videos: [],
    movies: {      
      url: '',
      title: '',
      views: '2',
      description: ''      
    }
  },
  methods: {   
    deleteVideo(index) {
      fetch(`http://localhost:3000/videos/${index}`, {
      method: 'DELETE',
      })
    },
    
    guardar() {
      fetch('http://localhost:3000/videos', {
        method: 'POST',
        body: JSON.stringify(this.movies),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => {
        console.log(err)
      })
      console.log(this.movies)
    }
  },
  created() {
    fetch("http://localhost:3000/videos")
        .then(res => {
          return res.json()
        })
        .then(data => {
          this.videos = data  
        })
        .catch(err => {
          console.log(err)
        })
  },
});
