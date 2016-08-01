define('camera-perspective/index', function(require, exports){
	var instance = {
		init: function(){
			//创建渲染器
			var render = new THREE.WebGLRenderer();
			render.setSize(400, 300);
			document.querySelector('.three').appendChild(render.domElement);
			render.setClearColor(0x000000);		
			//创建场景
			var scene = new THREE.Scene();
			//创建透视投影照相机
			// var camera = new THREE.PerspectiveCamera( 30, 600 / 400, 1, 10 );
			var camera = new THREE.PerspectiveCamera( 45, 400 / 300, 1, 10 );//fov角度越大，物体显得越小
			camera.position.set(0, 0, 5);
			scene.add(camera);

			//new THREE.Mesh( geometry, material);创建物体时有两个参数geometry，material，代表几何形状和材质
			//new THREE.CubeGeometry( width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides );
			//这里，width是x方向上的长度；height是y方向上的长度；depth是z方向上的长度；
			//后三个参数分别是在三个方向上的分段数，如widthSegments为3的话，代表x方向上水平分为三份。
			//一般情况下不需要分段的话，可以不设置后三个参数，后三个参数的缺省值为1
			var cube = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), new THREE.MeshBasicMaterial( {
				color: 0xff0000,
				wireframe: true
			} ));
			scene.add(cube);
			render.render(scene, camera);

		}
	};
	instance.init();
	exports.index = instance;
})