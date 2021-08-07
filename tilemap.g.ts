// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000f1d0f000000000200000000191919190f1e0f000000000200000000190d0b190f1b0f040405040304040404110e0c190f1b12121202000000000000191919191a101a00120200000000000000000000000212001202000000000000000000000002120012060404050404040404040000021200121212120200000000000000000212000000001202000000000000000002121212000012020000000000000000070409121212120704050409000000000213060404050408010214060900000002111313130201010102151702000000021313131c020f0f0f0216180200000006040404040a0f100f07040408000000000000000006040304080000000000`, img`
. . . 2 . . 2 . 2 . . . . . . . 
. . . 2 2 2 2 . 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 . 2 2 2 2 2 2 . . . . 
. . . 2 2 . 2 . . . . . . . . . 
2 . 2 . 2 . 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 . 2 2 2 2 2 2 2 
2 . 2 . . . 2 2 . 2 . . . . 2 2 
2 . 2 2 2 . 2 2 . 2 2 2 2 2 . . 
2 . . . 2 2 2 2 . . . . . 2 2 . 
2 . . . . . . . . 2 . . . . 2 . 
2 . . . . . . 2 2 2 . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 . . . . . 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection1,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection4,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.floorLightMoss,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorClosedEast,sprites.builtin.brick,sprites.dungeon.floorLight0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles14,sprites.builtin.forestTiles15,sprites.dungeon.floorDark0,sprites.dungeon.doorLockedNorth,sprites.builtin.forestTiles10,myTiles.tile4,myTiles.tile7,myTiles.tile1], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100002020201010101010101010101010101020202010101010101010101010101010202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
