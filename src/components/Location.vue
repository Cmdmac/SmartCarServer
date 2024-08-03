<template>

<!-- 	<script src="js/three.min.js"></script>
<script src="js/Detector.js"></script>
<script src="js/OrbitControls.js"></script>
<script src="js/IndoorMap.js"></script>
<script src="js/Projector.js"></script>
<script src="js/stats.min.js"></script>
<script src="js/IndoorMap2d.js"></script>
<script src="js/IndoorMap2dEx.js"></script>
<script src="js/IndoorMap3d.js"></script>
<script src="js/Theme.js"></script>
<link href="css/indoor3D.css" rel="stylesheet -->">

<<!-- div id="indoor3d" style="width: 800px; height: 900px; top:0px; left: 0px; position: absolute"></div>
<script>

    var params = {
        mapDiv:"indoor3d",
        dim:"2d"
    }
    var map = IndoorMap(params);
    map.load('data/indoorMap.json', function(){
        //map.setTheme(testTheme);
        map.showAreaNames(true).setSelectable(true);
        var ul = IndoorMap.getUI(map);
        document.body.appendChild(ul);
    });


    window.addEventListener('resize', function() {
        var div = document.getElementById('indoor3d');
        div.style.width = window.innerWidth - 1 + 'px';
        div.style.height = window.innerHeight + 'px';
    })

    window.onload = function() {
        var div = document.getElementById('indoor3d');
        div.style.width = window.innerWidth - 1 + 'px';
        div.style.height = window.innerHeight + 'px';
    }

</script> -->
<!-- buttons just for test-->
<div class="testButton">
<ul >
    <li onclick="map.zoomIn(1.2)">+</li>
    <li onclick="map.zoomOut(0.8)">-</li>
    <!--<li onclick="map.setTopView()">Top View</li>-->
    <li onclick="map.setDefaultView()">Reset</li>

</ul>
</div>
</template>

<style scoped>
	
</style>
<script type="text/javascript">
import axios from 'axios';

export default {
	name: 'Location',
	props: {
	  msg: String
	},
	
	created() {
		loadHtmlFile();
	},
	
	methods: {
		loadHtmlFile() {
		    axios.get('../../public/index.html')
		   .then(response => {
		      this.htmlContent = response.data;
		    })
		   .catch(error => {
		      console.error(error);
		    });
  		}
	}
}
</script>