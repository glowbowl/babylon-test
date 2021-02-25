import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import {ArcRotateCamera, Engine, FreeCamera, HemisphericLight, Mesh, Scene, Vector3} from '@babylonjs/core';


@Component({
  selector: 'second-playground',
  templateUrl: './second-playground.component.html',
  styleUrls: ['./second-playground.component.scss']
})
export class SecondPlaygroundComponent implements OnInit {


  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;

  @Output() engine: Engine;
  @Output() scene: Scene;
  @Output() camera: ArcRotateCamera;

  constructor() { }

  ngOnInit(): void {
    this.engine = new Engine(this.canvas.nativeElement, true);
    this.scene = new Scene(this.engine);

    this.camera = this.createCamera(this.scene);

    this.camera.attachControl(this.canvas.nativeElement, true);

    
    this.camera.lowerRadiusLimit = 6;
    this.camera.upperRadiusLimit = 20;

    this.camera.useBouncingBehavior = true;

    this.createScene(this.scene, this.canvas.nativeElement);

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createCamera(scene: Scene) {
    const camera = new ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50, Vector3.Zero(), scene);

    return camera;
  }

  createScene(scene: Scene, canvas: HTMLCanvasElement) {
    const light = new HemisphericLight("hemi", new Vector3(0, 1, 0), scene);

    const box = Mesh.CreateBox("box", 3.0, scene);
  }

}
