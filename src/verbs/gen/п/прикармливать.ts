import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикармливать: PerfectVerb = {
  name: Word('прикармливать', 4),
  singular1stPerson: Word('прикармливаю', 4),
  singular2ndPerson: Word('прикармливаешь', 4),
  singular3rdPerson: Word('прикармливает', 4),
  plural1stPerson: Word('прикармливаем', 4),
  plural2ndPerson: Word('прикармливаете', 4),
  plural3rdPerson: Word('прикармливают', 4),
  masculinePast: Word('прикармливал', 4),
  femininePast: Word('прикармливала', 4),
  neuterPast: Word('прикармливало', 4),
  pluralPast: Word('прикармливали', 4),
  imperativeInformal: Word('прикармливай', 4),
  imperativeFormal: Word('прикармливайте', 4),
  imperfect: [],
};

perfectVerbs.set(прикармливать.name.text, прикармливать);

export { прикармливать };