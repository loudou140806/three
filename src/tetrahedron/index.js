define('webPath/tetrahedron/index', function (require, exports, moudle) {
		var instance = {
			init: function(){
				//创建渲染器
				var render = new THREE.WebGLRenderer();
				var render2 = new THREE.WebGLRenderer();
				//设置canvans的大小为400*300
				render.setSize(400, 300);
				render2.setSize(400, 300);
				//添加到body中
				document.querySelector('.three').appendChild(render.domElement);
				// document.querySelector('.three').appendChild(render2.domElement);
				//设置背景颜色
				render.setClearColor(0x000000);
				render.setClearColor(0x000000);
				//创建场景
				var scene = new THREE.Scene();
				//创建照相机
				var camera = new THREE.PerspectiveCamera( 60, 4 / 3, 1, 1000 );
				// var camera = new THREE.OrthographicCamera( -4, 4, 3, -3, 1, 10);
				camera.position.set(-3, 3, 5);
				camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
				scene.add(camera);

				//创建正四面体
				//new THREE.OctahedronGeometry(3)创建一个半径为3的正八面体
				//new THREE.IcosahedronGeometry(3)创建一个半径为3的正十二面体
				var cube = new THREE.Mesh( new THREE.OctahedronGeometry(3), 
						new THREE.MeshBasicMaterial({ 
						color: 0xff0000,
						wireframe: true
					})
				);
				scene.add(cube);

				render.render(scene, camera);
				// render2.render(scene, camera);
			}
		}
	instance.init();
	exports.index = instance;
})
