import { AVAILABLE_COLORS } from '../constants/colors';
import { SHAPES } from '../constants/shapes';

export function createDefaultContacts(count) {
  return Array(count)
    .fill(null)
    .map((_, index) => {
      const color = AVAILABLE_COLORS[index % AVAILABLE_COLORS.length];
      const shape = SHAPES[index % SHAPES.length]

      return {
        id: String(index),
        name: '',
        phone: '',
        color: color.value,
        colorName: color.name,
        textColor: color.textColor,
        shape: shape.type,
        shapeColor: '#000',  //(suprotna boja od pozadine)
      };
    });
}
