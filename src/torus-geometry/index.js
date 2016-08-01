define('webPath/torus-geometry/index', function (require, exports, moudle) {
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
				var camera = new THREE.PerspectiveCamera( 60, 4 / 3, 1, 100);
				// var camera = new THREE.OrthographicCamera( -4, 4, 3, -3, 1, 10);
				camera.position.set(-3, 0, 10);
				camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
				scene.add(camera);

				// 创建圆环
				// THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc)
				// 其中，radius是圆环半径；tube是管道半径；
				// radialSegments与tubularSegments分别是两个分段数，详见上图；
				// arc是圆环面的弧度，缺省值为Math.PI * 2。

				var cube = new THREE.Mesh( new THREE.TorusGeometry(3, 1, 12, 18), 
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
