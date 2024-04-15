// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Maze":
            case "level2":return tiles.createTilemap(hex`100010000101010101010101010101020101010101010101020102020202020201010101010101020101020101010102010201020101010201010202020101020102010201010102010101010201020201020201010102020202020102010102010102010101020102010101020101020101020101010201020101010201010201010204010202010201010102010101020201040102010102010102010f0f0f0f0202040102010101010201010f010102060704020201010102020f0f0f0102080b09040a03010102010101010101020c0d0e0402020202020f0f0f0f0f0f020e070b040101010101010101010101020503030401010101010101010101010206070809`, img`
. . . . . . . . . . . 2 . . . . 
. . . . 2 . 2 2 2 2 2 2 . . . . 
. . . 2 . . 2 . . . . 2 . 2 . 2 
. . . 2 . . 2 2 2 . . 2 . 2 . 2 
. . . 2 . . . . 2 . 2 2 . 2 2 . 
. . 2 2 2 2 2 . 2 . . 2 . . 2 . 
. . 2 . 2 . . . 2 . . 2 . . 2 . 
. . 2 . 2 . . . 2 . . 2 . . 2 . 
. 2 2 . 2 . . . 2 . . . 2 2 . . 
. 2 . . 2 . . 2 2 2 2 2 2 2 2 . 
. 2 . . . . 2 . . 2 . . 2 . . . 
2 2 . . . 2 2 2 2 2 . 2 . . . . 
. . . . 2 . . . . . . 2 . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadVertical,sprites.dungeon.purpleOuterNorthWest,sprites.builtin.crowd0,sprites.builtin.crowd1,sprites.builtin.crowd2,sprites.builtin.crowd4,sprites.dungeon.stairWest,sprites.builtin.crowd3,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
