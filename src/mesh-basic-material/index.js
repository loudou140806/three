define('webPath/mesh-basic-material/index', function (require, exports, moudle) {

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
				camera.position.set(0, 0, 5);
				scene.add(camera);

				//创建长方体
				//基本材质
				// THREE.MeshBasicMaterial(opt)
				// visible：是否可见，默认为true
				// side：渲染面片正面或是反面，默认为正面THREE.FrontSide，可设置为反面THREE.BackSide，或双面THREE.DoubleSide
				// wireframe：是否渲染线而非面，默认为false
				// color：十六进制RGB颜色，如红色表示为0xff0000
				// map：使用纹理贴图
				var cube = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), 
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
