define('webPath/cylinder/index', function (require, exports, moudle) {
		var instance = {
			init: function(){
				//创建渲染器
				var render = new THREE.WebGLRenderer();
				//设置canvans的大小为400*300
				render.setSize(400, 300);
				//添加到body中
				document.querySelector('.three').appendChild(render.domElement);
				//设置背景颜色
				render.setClearColor(0x000000);
				//创建场景
				var scene = new THREE.Scene();
				//创建照相机
				var camera = new THREE.PerspectiveCamera( 60, 4 / 3, 1, 1000 );
				// var camera = new THREE.OrthographicCamera( -4, 4, 3, -3, 1, 10);
				camera.position.set(0, 0, 5);
				// camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
				scene.add(camera);

				//创建圆柱体
				//THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded)
				//radiusTop与radiusBottom分别是顶面和底面的半径，由此可知，当这两个参数设置为不同的值时，实际上创建的是一个圆台；
				//height是圆柱体的高度；
				//radiusSegments与heightSegments可类比球体中的分段；
				//openEnded是一个布尔值，表示是否没有顶面和底面，缺省值为false，表示有顶面和底面。
				var cube = new THREE.Mesh( new THREE.CylinderGeometry( 2, 2, 3, 18, 12, false ), 
						new THREE.MeshBasicMaterial({ 
						color: 0xff0000,
						wireframe: true
					})
				);
				scene.add(cube);

				render.render(scene, camera);
			}
		}
	instance.init();
	exports.index = instance;
})
