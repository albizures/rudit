import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const демонстрировать: PerfectVerb = {
  name: Word('демонстрировать', 8),
  singular1stPerson: Word('демонстрирую', 8),
  singular2ndPerson: Word('демонстрируешь', 8),
  singular3rdPerson: Word('демонстрирует', 8),
  plural1stPerson: Word('демонстрируем', 8),
  plural2ndPerson: Word('демонстрируете', 8),
  plural3rdPerson: Word('демонстрируют', 8),
  masculinePast: Word('демонстрировал', 8),
  femininePast: Word('демонстрировала', 8),
  neuterPast: Word('демонстрировало', 8),
  pluralPast: Word('демонстрировали', 8),
  imperativeInformal: Word('демонстрируй', 8),
  imperativeFormal: Word('демонстрируйте', 8),
  imperfect: [],
};

perfectVerbs.set(демонстрировать.name.text, демонстрировать);

export { демонстрировать };