// banco_preguntas.js - 20 preguntas con rotación de punto rojo
const bancoPreguntas = [
    // --- ENFOQUE: ÁNGULO EN LA BASE (Índice Rojo: 0) ---
    {
        pregunta: "1. Si el ángulo rojo es alfa, el cateto opuesto mide 6 y el adyacente 8, ¿cuál es el valor del SENO?",
        opciones: ["0.6 (6/10)", "0.8 (8/10)", "0.75 (6/8)", "1.25"],
        correcta: "0.6 (6/10)",
        puntos: [{x:0, y:0}, {x:8, y:0}, {x:8, y:6}],
        indiceRojo: 0
    },
    {
        pregunta: "2. En este triángulo, si el ángulo rojo mide 45°, ¿cuál es el valor de la TANGENTE?",
        opciones: ["1.0", "0.5", "0.707", "1.41"],
        correcta: "1.0",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:5}],
        indiceRojo: 0
    },
    {
        pregunta: "3. Para el ángulo marcado, si el Coseno es 0.8 y la hipotenusa es 10, ¿cuánto mide el cateto adyacente?",
        opciones: ["8", "6", "10", "5"],
        correcta: "8",
        puntos: [{x:0, y:0}, {x:8, y:0}, {x:8, y:6}],
        indiceRojo: 0
    },
    {
        pregunta: "4. Si el ángulo rojo es de 30° (π/6 rad), ¿cuál es el valor de su SENO?",
        opciones: ["0.5", "0.866", "1.0", "0.707"],
        correcta: "0.5",
        puntos: [{x:0, y:0}, {x:8.66, y:0}, {x:8.66, y:5}],
        indiceRojo: 0
    },
    {
        pregunta: "5. ¿Cuál es el valor del COSENO del ángulo rojo si el adyacente es 12 y la hipotenusa 13?",
        opciones: ["0.92 (12/13)", "0.38 (5/13)", "2.4", "0.41"],
        correcta: "0.92 (12/13)",
        puntos: [{x:0, y:0}, {x:12, y:0}, {x:12, y:5}],
        indiceRojo: 0
    },
    {
        pregunta: "6. Si los dos catetos son iguales a 7, ¿cuánto mide el ángulo marcado en rojo?",
        opciones: ["45°", "30°", "60°", "90°"],
        correcta: "45°",
        puntos: [{x:0, y:0}, {x:7, y:0}, {x:7, y:7}],
        indiceRojo: 0
    },
    {
        pregunta: "7. Si el ángulo rojo tiende a 0° (triángulo muy plano), ¿a qué valor tiende su Coseno?",
        opciones: ["A 1", "A 0", "Al infinito", "A 0.5"],
        correcta: "A 1",
        puntos: [{x:0, y:0}, {x:10, y:0}, {x:10, y:1}],
        indiceRojo: 0
    },

    // --- ENFOQUE: ÁNGULO SUPERIOR (Índice Rojo: 2) ---
    {
        pregunta: "8. Observe el punto rojo arriba. Si la altura es 12 y la base es 5, ¿cuál es el cateto OPUESTO para este ángulo?",
        opciones: ["La base (5)", "La altura (12)", "La hipotenusa (13)", "No tiene opuesto"],
        correcta: "La base (5)",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:12}],
        indiceRojo: 2
    },
    {
        pregunta: "9. Para el ángulo rojo superior, si la base mide 3 y la altura 4, ¿cuánto vale su TANGENTE?",
        opciones: ["0.75 (3/4)", "1.33 (4/3)", "0.6", "0.8"],
        correcta: "0.75 (3/4)",
        puntos: [{x:0, y:0}, {x:3, y:0}, {x:3, y:4}],
        indiceRojo: 2
    },
    {
        pregunta: "10. En el vértice rojo superior, ¿cuál es el valor del SENO si la base es 8 y la hipotenusa 10?",
        opciones: ["0.8 (8/10)", "0.6 (6/10)", "1.25", "0.75"],
        correcta: "0.8 (8/10)",
        puntos: [{x:0, y:0}, {x:8, y:0}, {x:8, y:6}],
        indiceRojo: 2
    },
    {
        pregunta: "11. Si el ángulo de la base es 60°, ¿cuánto mide el ángulo marcado con el punto rojo arriba?",
        opciones: ["30°", "60°", "90°", "45°"],
        correcta: "30°",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:8.66}],
        indiceRojo: 2
    },
    {
        pregunta: "12. Para el punto rojo superior, ¿cuál es su cateto ADYACENTE en este gráfico?",
        opciones: ["La altura vertical", "La base horizontal", "La hipotenusa", "El origen"],
        correcta: "La altura vertical",
        puntos: [{x:0, y:0}, {x:4, y:0}, {x:4, y:7}],
        indiceRojo: 2
    },
    {
        pregunta: "13. Si el triángulo es isósceles, ¿qué relación hay entre el seno del ángulo base y el seno del ángulo superior rojo?",
        opciones: ["Son iguales (√2/2)", "El superior es el doble", "El de la base es 1", "Son inversos"],
        correcta: "Son iguales (√2/2)",
        puntos: [{x:0, y:0}, {x:6, y:0}, {x:6, y:6}],
        indiceRojo: 2
    },

    // --- ENFOQUE: PROPIEDADES Y CASOS LÍMITE (Varios índices) ---
    {
        pregunta: "14. Argumento: Si el punto rojo está en el ángulo recto (90°), ¿cuánto vale su Coseno?",
        opciones: ["0", "1", "Indefinido", "0.5"],
        correcta: "0",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:5}],
        indiceRojo: 1
    },
    {
        pregunta: "15. ¿Por qué la TANGENTE del ángulo rojo se vuelve error si el cateto adyacente es 0?",
        opciones: ["Porque no se puede dividir por cero", "Porque el ángulo no existe", "Porque la hipotenusa es cero", "Porque el seno es 1"],
        correcta: "Porque no se puede dividir por cero",
        puntos: [{x:0, y:0}, {x:0.1, y:0}, {x:0.1, y:10}],
        indiceRojo: 1
    },
    {
        pregunta: "16. En el Círculo Unitario, si la hipotenusa es 1, ¿qué línea representa el SENO del ángulo rojo?",
        opciones: ["La coordenada Y (altura)", "La coordenada X (base)", "La hipotenusa", "El origen"],
        correcta: "La coordenada Y (altura)",
        puntos: [{x:0, y:0}, {x:0.7, y:0}, {x:0.7, y:0.7}],
        indiceRojo: 0
    },
    {
        pregunta: "17. Si el ángulo rojo es de π/3 radianes, ¿a cuántos grados equivale?",
        opciones: ["60°", "30°", "45°", "180°"],
        correcta: "60°",
        puntos: [{x:0, y:0}, {x:4, y:0}, {x:4, y:6.92}],
        indiceRojo: 0
    },
    {
        pregunta: "18. Detección de error: ¿Es posible que el Coseno del ángulo rojo sea 2.0?",
        opciones: ["No, nunca puede ser mayor a 1", "Sí, en triángulos muy grandes", "Solo si el cateto es 2", "Sí, en radianes"],
        correcta: "No, nunca puede ser mayor a 1",
        puntos: [{x:0, y:0}, {x:2, y:0}, {x:2, y:5}],
        indiceRojo: 0
    },
    {
        pregunta: "19. Si el ángulo rojo superior es muy pequeño (casi 0°), ¿cómo es la base del triángulo?",
        opciones: ["Casi cero", "Muy larga", "Igual a la altura", "Infinita"],
        correcta: "Casi cero",
        puntos: [{x:0, y:0}, {x:0.5, y:0}, {x:0.5, y:10}],
        indiceRojo: 2
    },
    {
        pregunta: "20. En un triángulo donde el ángulo rojo es alfa, si Sen(alfa) = Cos(alfa), ¿cuánto mide alfa?",
        opciones: ["45°", "0°", "90°", "60°"],
        correcta: "45°",
        puntos: [{x:0, y:0}, {x:8, y:0}, {x:8, y:8}],
        indiceRojo: 0
    },
// --- BLOQUE 1: GRADOS VS RADIANES (Modos de la calculadora) ---
    {
        pregunta: "1. Pon tu calculadora en modo RAD. ¿Cuánto da el Seno de (π/2)?",
        opciones: ["1", "0", "0.5", "Error"],
        correcta: "1",
        puntos: [{x:0, y:0}, {x:0.1, y:0}, {x:0.1, y:10}],
        indiceRojo: 0
    },
    {
        pregunta: "2. Pon tu calculadora en modo DEG. ¿Cuánto es el Coseno de 60°?",
        opciones: ["0.5", "0.866", "1.0", "0.707"],
        correcta: "0.5",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:8.66}],
        indiceRojo: 0
    },
    {
        pregunta: "3. Si calculas Tan(45) y te da 1.61, ¿en qué modo está tu calculadora?",
        opciones: ["Radianes (RAD)", "Grados (DEG)", "Gradianes (GRA)", "Está dañada"],
        correcta: "Radianes (RAD)",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:5}],
        indiceRojo: 0
    },

    // --- BLOQUE 2: ARCO-FUNCIONES (Hallar el ángulo rojo) ---
    {
        pregunta: "4. En el triángulo, el opuesto es 3 y el adyacente es 4. Usa 'SHIFT + TAN' (tan⁻¹) de (3/4). ¿Cuánto mide el ángulo rojo?",
        opciones: ["36.87°", "53.13°", "45°", "30°"],
        correcta: "36.87°",
        puntos: [{x:0, y:0}, {x:4, y:0}, {x:4, y:3}],
        indiceRojo: 0
    },
    {
        pregunta: "5. Usa tu calculadora: Si el Seno del ángulo rojo es 0.5, halla el ángulo usando sin⁻¹(0.5).",
        opciones: ["30°", "60°", "45°", "90°"],
        correcta: "30°",
        puntos: [{x:0, y:0}, {x:8.66, y:0}, {x:8.66, y:5}],
        indiceRojo: 0
    },
    {
        pregunta: "6. Mira el punto rojo arriba. La base es 5 y la altura es 12 (Hipotenusa 13). Usa cos⁻¹(12/13). ¿Qué valor obtienes?",
        opciones: ["22.62°", "67.38°", "45°", "15.5°"],
        correcta: "22.62°",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:12}],
        indiceRojo: 2
    },

    // --- BLOQUE 3: CONVERSIONES Y CÁLCULO REAL ---
    {
        pregunta: "7. ¿A cuántos grados equivalen 1.5708 radianes? (Usa la calculadora)",
        opciones: ["90°", "45°", "180°", "360°"],
        correcta: "90°",
        puntos: [{x:0, y:0}, {x:0.1, y:0}, {x:0.1, y:10}],
        indiceRojo: 0
    },
    {
        pregunta: "8. Si la calculadora te da un error al presionar sin⁻¹(1.5), ¿cuál es la razón?",
        opciones: ["El seno nunca es mayor a 1", "La calculadora no tiene batería", "El ángulo es negativo", "Falta poner π"],
        correcta: "El seno nunca es mayor a 1",
        puntos: [{x:0, y:0}, {x:2, y:0}, {x:2, y:8}],
        indiceRojo: 0
    },
    {
        pregunta: "9. Halla el ángulo rojo superior si la base (opuesto) es 10 y la altura (adyacente) es 10. Usa tan⁻¹(10/10).",
        opciones: ["45°", "90°", "30°", "60°"],
        correcta: "45°",
        puntos: [{x:0, y:0}, {x:10, y:0}, {x:10, y:10}],
        indiceRojo: 2
    },
    {
        pregunta: "10. Usa el modo RAD: ¿Cuánto es el Coseno de π (3.1416)?",
        opciones: ["-1", "1", "0", "0.5"],
        correcta: "-1",
        puntos: [{x:0, y:0}, {x:10, y:0}, {x:0.1, y:0.1}],
        indiceRojo: 0
    },

    // --- BLOQUE 4: DESAFÍOS DE PRECISIÓN ---
    {
        pregunta: "11. Halla el ángulo rojo de la base si el Coseno es 0.7071. Usa cos⁻¹.",
        opciones: ["45°", "30°", "60°", "0°"],
        correcta: "45°",
        puntos: [{x:0, y:0}, {x:7.07, y:0}, {x:7.07, y:7.07}],
        indiceRojo: 0
    },
    {
        pregunta: "12. Si el ángulo rojo superior tiene un Seno de 0.8, ¿cuánto mide en grados? sin⁻¹(0.8)",
        opciones: ["53.13°", "36.87°", "45°", "60°"],
        correcta: "53.13°",
        puntos: [{x:0, y:0}, {x:8, y:0}, {x:8, y:6}],
        indiceRojo: 2
    },
    {
        pregunta: "13. En modo RAD, ¿cuál es el resultado de tan⁻¹(1)?",
        opciones: ["0.785 (π/4)", "1.57 (π/2)", "3.14 (π)", "0"],
        correcta: "0.785 (π/4)",
        puntos: [{x:0, y:0}, {x:5, y:0}, {x:5, y:5}],
        indiceRojo: 0
    },
    {
        pregunta: "14. Calcula la hipotenusa si el ángulo rojo es 30° y el opuesto es 5. (Usa: 5 / sin 30°)",
        opciones: ["10", "8.66", "5", "7.5"],
        correcta: "10",
        puntos: [{x:0, y:0}, {x:8.66, y:0}, {x:8.66, y:5}],
        indiceRojo: 0
    },
    {
        pregunta: "15. ¿Qué botón de la calculadora usarías para hallar un ángulo si conoces los lados?",
        opciones: ["SHIFT (o INV) + Sin/Cos/Tan", "MODE + CLR", "DEL + AC", "Log + √"],
        correcta: "SHIFT (o INV) + Sin/Cos/Tan",
        puntos: [{x:0, y:0}, {x:4, y:0}, {x:4, y:4}],
        indiceRojo: 0
    },
    {
        pregunta: "16. Calcula: Tan⁻¹(0.577). ¿A qué ángulo notable se aproxima?",
        opciones: ["30°", "60°", "45°", "90°"],
        correcta: "30°",
        puntos: [{x:0, y:0}, {x:10, y:0}, {x:10, y:5.77}],
        indiceRojo: 0
    },
    {
        pregunta: "17. Si en modo DEG calculas Sin(90), ¿qué resultado obtienes?",
        opciones: ["1", "0", "Error", "-1"],
        correcta: "1",
        puntos: [{x:0, y:0}, {x:0.1, y:0}, {x:0.1, y:10}],
        indiceRojo: 1
    },
    {
        pregunta: "18. Halla el ángulo rojo superior usando tan⁻¹ si la base es 15 y la altura es 8.",
        opciones: ["61.93°", "28.07°", "45°", "30°"],
        correcta: "61.93°",
        puntos: [{x:0, y:0}, {x:15, y:0}, {x:15, y:8}],
        indiceRojo: 2
    },
    {
        pregunta: "19. Convierte con la calculadora: ¿Cuántos radianes son 180°?",
        opciones: ["3.1416 (π)", "1.5708 (π/2)", "6.2832 (2π)", "0"],
        correcta: "3.1416 (π)",
        puntos: [{x:0, y:0}, {x:10, y:0}, {x:0.1, y:0.1}],
        indiceRojo: 0
    },
    {
        pregunta: "20. Si el Coseno de un ángulo es 0, ¿qué ángulo te da la calculadora al hacer cos⁻¹(0)?",
        opciones: ["90°", "0°", "180°", "45°"],
        correcta: "90°",
        puntos: [{x:0, y:0}, {x:10, y:0}, {x:10, y:10}],
        indiceRojo: 1
    }
];