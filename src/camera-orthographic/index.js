define('camera-orthographic/index', function(require, exports, moudle){
	var instance = {
		init: function(){
			var self = this;
			//创建渲染器
			var render = new THREE.WebGLRenderer();
			//设置canvans的大小为400*300
			render.setSize(400, 300);
			//添加到body中
			document.querySelector('.three').appendChild(render.domElement);
			//设置背景颜色
			render.setClearColor(0x000000);
			// 设置场景
			var scene = new THREE.Scene();
			// 设置照相机
			var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10 );
			camera.position.set(4, -3, 5)	;
			camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
			scene.add(camera);

			var cube = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), new THREE.MeshBasicMaterial( {
				color: 0xff0000,
				wireframe: true
			} ));

			scene.add(cube);

			render.render(scene, camera);
			self.renderCode();
		},
		renderCode: function(){
			var self = this;
			console.log(this);
			document.querySelector('.code').innerHTML = self.init;
		}
	}
	instance.init();
	exports.index = instance;
})