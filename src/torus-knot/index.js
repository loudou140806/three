define('webPath/torus-knot/index', function (require, exports, moudle) {
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

				// 创建圆环节
				// new THREE.TorusKnotGeometry( radius, tube, segmentsR, segmentsT, p, q, heightScale );
				// 前四个参数在圆环面中已经有所介绍，
				// p和q是控制其样式的参数，一般可以缺省，
				// 如果需要详细了解，请学习圆环结的相关知识；
				// heightScale是在z轴方向上的缩放。

				var cube = new THREE.Mesh( new THREE.TorusKnotGeometry(3, 0.5, 128, 8), 
						new THREE.MeshBasicMaterial({ 
						color: 0xff0000,
						wireframe: true
					})
				);å
				scene.add(cube);

				render.render(scene, camera);
				// render2.render(scene, camera);
			}
		}
	instance.init();
	exports.index = instance;
})
