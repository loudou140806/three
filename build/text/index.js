
define('webPath/text/index',function(require,exports,moudle){var instance={init:function(){var render=new THREE.WebGLRenderer();render.setSize(400,300);document.querySelector('.three').appendChild(render.domElement);render.setClearColor(0x000000);var scene=new THREE.Scene();var camera=new THREE.PerspectiveCamera(30,4/3,1,100);camera.position.set(1,0,10);scene.add(camera);var cube=new THREE.Mesh(new THREE.TextGeometry('hello',{size:1,height:0.5}),new THREE.MeshBasicMaterial({color:0xff00ff,wireframe:true}));scene.add(cube);render.render(scene,camera);}}
instance.init();exports.index=instance;})