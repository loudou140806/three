define('webPath/text/index', function (require, exports, moudle) {
		var instance = {
			init: function(){
				//创建渲染器
				var render = new THREE.WebGLRenderer();
				//设置canvans的大小为400*300
				render.setSize(400, 300);
				//添加到body中
				document.querySelector('.three').appendChild(render.domElement);
				// document.querySelector('.three').appendChild(render2.domElement);
				//设置背景颜色
				render.setClearColor(0x000000);
				//创建场景
				var scene = new THREE.Scene();
				//创建照相机
				var camera = new THREE.PerspectiveCamera( 30, 4 / 3, 1, 100);
				// var camera = new THREE.OrthographicCamera( -4, 4, 3, -3, 1, 10);
				camera.position.set(1, 0, 10);
				// camera.lookAt(new THREE.Vector3( 0, 0, 0 ));
				scene.add(camera);

				// 创建文字形状的流程和之前介绍的基本几何形状是类似的，其构造函数是：
				// THREE.TextGeometry(text, parameters)
				// 其中，text是文字字符串，parameters是以下参数组成的对象：
				// size：字号大小，一般为大写字母的高度
				// height：文字的厚度
				// curveSegments：弧线分段数，使得文字的曲线更加光滑
				// font：字体，默认是'helvetiker'，需对应引用的字体文件
				// weight：值为'normal'或'bold'，表示是否加粗
				// style：值为'normal'或'italics'，表示是否斜体
				// bevelEnabled：布尔值，是否使用倒角，意为在边缘处斜切
				// bevelThickness：倒角厚度
				// bevelSize：倒角宽度

				var cube = new THREE.Mesh( new THREE.TextGeometry('hello', {size:1,height:0.5}), 
						new THREE.MeshBasicMaterial({ 
						color: 0xff00ff,
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
