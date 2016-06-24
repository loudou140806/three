define('home/index', function (require, exports, moudle) {
	console.log(require.resolve('home/index'));
	console.log(require.resolve('camrea/index'));
	console.log(moudle.uri);
		var instance = {
			init: function(){
				//创建渲染器
				var render = new THREE.WebGLRenderer();
				//设置canvans的大小为400*300
				render.setSize(400, 300);
				//添加到body中
				document.querySelector('body').appendChild(render.domElement);
				//设置背景颜色
				render.setClearColor(0x000000);
				//创建场景
				var scene = new THREE.Scene();
				//创建照相机
				var camera = new THREE.PerspectiveCamera( 45, 4 / 3, 1, 1000 );
				camera.position.set(0, 0, 5);
				scene.add(camera);

				//创建长方体
				var cube = new THREE.Mesh( new THREE.CubeGeometry( 1, 2, 3 ), 
						new THREE.MeshBasicMaterial({ 
						color: 0xff0000 
					})
				);
				scene.add(cube);

				render.render(scene, camera);
			}
		}
	
	instance.init();
})
