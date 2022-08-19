class Bootloader extends Phaser.Scene{
  constructor(){
    super('Bootloader')
  }
  init(){
    console.log('scene Bootloader');
  }
  preload(){
    this.load.path = './assets/';
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

  
    //se suma al heroe
    this.hero_walk=this.add.sprite(100,200, 'hero_walk',2).setScale(2);
 
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

    

     
    
  }
  udpate(){

  }
}

export default Bootloader;