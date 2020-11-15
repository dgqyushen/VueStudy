
var app = new Vue({
    el: "#music-app",
    data: {
        query: '',
        musicList: [],
        musicSrc: ''
    },
    methods: {
        searchMusic: function () {
            var that = this;
            axios.get("https://autumnfish.cn/search?keywords=" + this.query)
                .then(function (response) {
                    console.log(response);
                    that.musicList = response.data.result.songs;
                }, function (error) {
                    console.log(error);
                })
        },
        playMusic: function (id) {
            // console.log(id)

            var that = this;
            var music = document.getElementById("music");
            axios.get("https:////autumnfish.cn/song/url?id=" + id).then(function (response) {
                // console.log(response.data.data[0].url);
                 that.musicSrc = response.data.data[0].url;



            }, function (error) {
                console.log(error);
            })


        }
    }
});