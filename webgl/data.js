var vertexData = [
    // // x,    y,    z
    // // front face (z: +1)
    // 1.0, 1.0, 1.0, // top right
    // -1.0, 1.0, 1.0, // top left
    // -1.0, -1.0, 1.0, // bottom left
    // 1.0, -1.0, 1.0, // bottom right
    // // right face (x: +1)
    // 1.0, 1.0, -1.0, // top right
    // 1.0, 1.0, 1.0, // top left
    // 1.0, -1.0, 1.0, // bottom left
    // 1.0, -1.0, -1.0, // bottom right
    // // top face (y: +1)
    // 1.0, 1.0, -1.0, // top right
    // -1.0, 1.0, -1.0, // top left
    // -1.0, 1.0, 1.0, // bottom left
    // 1.0, 1.0, 1.0, // bottom right
    // // left face (x: -1)
    // -1.0, 1.0, 1.0, // top right
    // -1.0, 1.0, -1.0, // top left
    // -1.0, -1.0, -1.0, // bottom left
    // -1.0, -1.0, 1.0, // bottom right
    // // bottom face (y: -1)
    // 1.0, -1.0, 1.0, // top right
    // -1.0, -1.0, 1.0, // top left
    // -1.0, -1.0, -1.0, // bottom left
    // 1.0, -1.0, -1.0, // bottom right
    // // back face (z: -1)
    // -1.0, 1.0, -1.0, // top right
    // 1.0, 1.0, -1.0, // top left
    // 1.0, -1.0, -1.0, // bottom left
    // -1.0, -1.0, -1.0  // bottom right
];

var colorData = [
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,

    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,

    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,

    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,

    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,

    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,

    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,

    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,

    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,

    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,

    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,

    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,

    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 0.0, 0.0,

    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,
    1.0, 1.0, 0.0,

    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 1.0, 0.0,

    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,
    1.0, 0.5, 0.5,

    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,
    1.0, 0.0, 1.0,

    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0,
    0.0, 0.0, 1.0
];

var indexData = [
    // 0, 1, 2, 0, 2, 3,    // Front face
    // 4, 5, 6, 4, 6, 7,    // Back face
    // 8, 9, 10, 8, 10, 11,  // Top face
    // 12, 13, 14, 12, 14, 15, // Bottom face
    // 16, 17, 18, 16, 18, 19, // Right face
    // 20, 21, 22, 20, 22, 23  // Left face
];
var normalData = [];