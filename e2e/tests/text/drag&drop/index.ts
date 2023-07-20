import * as fabric from 'fabric';
import { beforeAll } from '../../test';

beforeAll(
  (canvas) => {
    const textValue = 'fabric.js sandbox';
    const text = new fabric.Textbox(textValue, {
      originX: 'center',
      width: 200,
      left: 150,
      top: 20,
      splitByGrapheme: true,
      styles: fabric.util.stylesFromArray(
        [
          {
            style: {
              fontWeight: 'bold',
              fontSize: 64,
            },
            start: 0,
            end: 9,
          },
        ],
        textValue
      ),
    });
    canvas.on('mouse:down', (e) => console.log(e.pointer));
    const text2 = new fabric.Textbox(
      'lorem ipsum\ndolor\nsit Amet2\nconsectgetur',
      {
        left: 400,
        top: 20,
        objectCaching: false,
        fontFamily: 'Arial',
        styles: {
          0: {
            0: { fill: 'red', fontSize: 20 },
            1: { fill: 'red', fontSize: 30 },
            2: { fill: 'red', fontSize: 40 },
            3: { fill: 'red', fontSize: 50 },
            4: { fill: 'red', fontSize: 60 },
            6: { textBackgroundColor: 'yellow' },
            7: {
              textBackgroundColor: 'yellow',
              textDecoration: ' line-through',
              linethrough: true,
            },
            8: {
              textBackgroundColor: 'yellow',
              textDecoration: ' line-through',
              linethrough: true,
            },
            9: { textBackgroundColor: 'yellow' },
          },
          1: {
            0: { textDecoration: 'underline' },
            1: { textDecoration: 'underline' },
            2: {
              fill: 'green',
              fontStyle: 'italic',
              textDecoration: 'underline',
            },
            3: {
              fill: 'green',
              fontStyle: 'italic',
              textDecoration: 'underline',
            },
            4: {
              fill: 'green',
              fontStyle: 'italic',
              textDecoration: 'underline',
            },
          },
          2: {
            0: { fill: 'blue', fontWeight: 'bold' },
            1: { fill: 'blue', fontWeight: 'bold' },
            2: { fill: 'blue', fontWeight: 'bold', fontSize: 63 },
            4: {
              fontFamily: 'Courier',
              textDecoration: ' underline',
              underline: true,
            },
            5: {
              fontFamily: 'Courier',
              textDecoration: ' underline',
              underline: true,
            },
            6: {
              fontFamily: 'Courier',
              textDecoration: ' overline',
              overline: true,
            },
            7: {
              fontFamily: 'Courier',
              textDecoration: ' overline',
              overline: true,
            },
            8: {
              fontFamily: 'Courier',
              textDecoration: ' overline',
              overline: true,
            },
          },
          3: {
            0: { fill: '#666', textDecoration: 'line-through' },
            1: { fill: '#666', textDecoration: 'line-through' },
            2: { fill: '#666', textDecoration: 'line-through' },
            3: { fill: '#666', textDecoration: 'line-through' },
            4: { fill: '#666', textDecoration: 'line-through' },
            7: { textDecoration: ' underline', underline: true },
            8: { stroke: '#ff1e15', strokeWidth: 2 },
            9: { stroke: '#ff1e15', strokeWidth: 2 },
          },
        },
      }
    );
    canvas.add(text, text2);
    return { canvas, objects: { text, text2 } };
  },
  { width: 800, height: 500 }
);
