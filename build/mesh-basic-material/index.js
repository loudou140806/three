
define('webPath/mesh-basic-material/index',function(require,exports,moudle){var instance={init:function(){var render=new THREE.WebGLRenderer();render.setSize(400,300);document.querySelector('.three').appendChild(render.domElement);render.setClearColor(0x000000);var scene=new THREE.Scene();var camera=new THREE.PerspectiveCamera(45,4/3,1,1000);camera.position.set(0,0,5);scene.add(camera);var cube=new THREE.Mesh(new THREE.CubeGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0xff0000,wireframe:true}));scene.add(cube);render.render(scene,camera);}}
instance.init();exports.index=instance;})