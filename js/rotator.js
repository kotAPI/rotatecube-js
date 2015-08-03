var Camera, Scene, Renderer;
var Geometry, Material, Mesh;

var init = function(){
	Renderer = new THREE.CanvasRenderer();
	Renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(Renderer.domElement);

	Camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,1000);
	Camera.position.z = 800;

	Scene = new THREE.Scene();

	Geometry = new THREE.CubeGeometry(200,200,200);
	Material = new THREE.MeshBasicMaterial({color:0x11111,wireframe:true,wireframeLinewidth:10});

	Mesh = new THREE.Mesh(Geometry,Material);
	Scene.add(Mesh);
}

var animate = function(){
	requestAnimationFrame(animate);
	
	Mesh.rotation.x = Date.now() * 0.0005;
	Mesh.rotation.y = Date.now() * 0.0006;
	

	Renderer.render(Scene,Camera);
}

	init();
	animate();


function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("coords").innerHTML = coords;
}