class Bootloader extends Phaser.Scene{
  constructor(){
    super('Bootloader')
  }
  init(){
    console.log('scene Bootloader');
  }
  preload(){
    this.load.path = './assets/';
    this.load.image('container_data','environment/container_data.png')
    this.load.spritesheet('hero_walk','warrior/spr_Walk_strip.png',{
      frameWidth:170,
      frameHeight:96,
    });

  }
  create(){
    //codigos del teclado
    const keyCodes= Phaser.Input.Keyboard.KeyCodes;
     console.log(keyCodes);
    
     //Se asignan las teclas para el manejo del heroe
     this.key_right= this.input.keyboard.addKey(keyCodes.RIGHT);

    //elementos de pantalla
    this.container_data= this.add.image(200,60,'container_data')
    this.text_data_point=this.add.text(60,60, 'POINT 0',{
      fontsize:30
    })
    this.text_data_power=this.add.text(60,40, 'POWER 0',{
      fontsize:30
    })
    //se suma al heroe
    this.hero_walk=this.add.sprite(100,200, 'hero_walk',2).setScale(2).setDepth(2);
 
   this.anims.create({
      key:'hero_walking',
      frames:this.anims.generateFrameNumbers('hero_walk',{
        start:0,
        end:7
      }),
      
      frameRate:15
    })
    this.tweens = this.add.tween({
      targets:[this.hero_walk],
      ease:'Bounce.easeOut',
      y:300
    });

    this.key_right.on('down',()=>{
      this.hero_walk.anims.play('hero_walking');
     })
    
     //contenedor de los datos del heroe
     const container = this.add.container(0,-300);
     container.add([
      this.container_data,
      this.text_data_point,
      this.text_data_power
     ]);

     this.add.tween({
      targets:[container],
      ease:'Bounce',
      y:10
     })
  }
  udpate(){

  }
}

export default Bootloader;