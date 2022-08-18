import Bootloader from './scenes/Bootloader.js';

const config={
    title:'Diviser Castell',
    version:'0.0.1',

    type: Phaser.AUTO,
    with:640,
    height:360,
    parent:'contenedor',
    pixelArt: true,
    backgroundColor: '#28c6cf',

    scene:[Bootloader]
};

const game = new Phaser.Game(config);

