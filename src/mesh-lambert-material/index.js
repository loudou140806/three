define('webPath/mesh-lambert-material/index', function (require, exports, moudle) {

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
				// Idiffuse = Kd * Id * cos(theta)
				// 其中，Idiffuse是漫反射光强，Kd是物体表面的漫反射属性，Id是光强，theta是光的入射角弧度。
				// new THREE.MeshLambertMaterial({
				//     color: 0xffff00
				// })
				// color是用来表现材质对散射光的反射能力，也是最常用来设置材质颜色的属性。除此之外，还可以用ambient和emissive控制材质的颜色。
				// ambient表示对环境光的反射能力，只有当设置了AmbientLight后，该值才是有效的，材质对环境光的反射能力与环境光强相乘后得到材质实际表现的颜色。
				// emissive是材质的自发光颜色，可以用来表现光源的颜色。单独使用红色的自发光
				
				// instantiate a loader
				var loader = new THREE.TextureLoader();

				// load a resource
				loader.load(
					// resource URL
					'../imgs/1.png',
					// Function when resource is loaded
					function ( texture ) {
						// do something with the texture
						console.log( texture );
						// var material = new THREE.MeshBasicMaterial( {
						// 	map: texture
						//  } );
						// var cube1 = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), new THREE.MeshBasicMaterial( {
						// 			// color: 0xff0000,
						// 			// emissive: 0xff0000,
						// 			// wireframe: true,
						// 			map: texture
						// 		 } ));
						var circle = new THREE.Mesh( new THREE.CircleGeometry(2, 20, 0 , Math.PI), new THREE.MeshLambertMaterial( {
							map: texture,
							wireframe: true
						} ));
						// scene.add(cube1);
						scene.add(circle);
						render.render(scene, camera);
					},
					// Function called when download progresses
					function ( xhr ) {
						console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
					},
					// Function called when download errors
					function ( xhr ) {
						console.log( 'An error happened' );
					}
				);

				// var cube = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), 
				// 		new THREE.MeshLambertMaterial({ 
				// 		color: 0xff0000,
				// 		emissive: 0xff0000,
				// 		wireframe: true
				// 	})
				// );
				// scene.add(cube);
				// render.render(scene, camera);
			}
		}
	instance.init();
	exports.index = instance;
})
