define('webPath/mesh-phong-material/index', function (require, exports, moudle) {

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
				var camera = new THREE.PerspectiveCamera( 45, 4 / 3, 1, 1000 );
				camera.position.set(-1, 1, 5);
				camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
				scene.add(camera);

				//光照模型
				//  Ispecular = Ks * Is * (cos(alpha)) ^ n
				// 其中，Ispecular是镜面反射的光强，Ks是材质表面镜面反射系数，Is是光源强度，alpha是反射光与视线的夹角，n是高光指数，越大则高光光斑越小。
				var light = new THREE.AmbientLight( 0x00ff00 );

				var cube = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), 
					// new THREE.MeshNormalMaterial();法向材质，从不同角度看颜色会不一样
						new THREE.MeshPhongMaterial({ 
						color: 0xff0000
					})
				);
				scene.add(light);
				scene.add(cube);

				render.render(scene, camera);
			}
		}
	instance.init();
	exports.index = instance;
})
