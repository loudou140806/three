define('webPath/circle/index', function (require, exports, moudle) {
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
				// var camera = new THREE.PerspectiveCamera( 45, 4 / 3, 1, 1000 );
				var camera = new THREE.OrthographicCamera( -4, 4, 3, -3, 1, 10);
				camera.position.set(0, 0, 5);
				camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
				scene.add(camera);

				//创建圆形
				//THREE.CircleGeometry(radius, segments, thetaStart, thetaLength)
				var cube = new THREE.Mesh( new THREE.CircleGeometry( 3, 8, Math.PI / 6, Math.PI / 3 ), 
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
