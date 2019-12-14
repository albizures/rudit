import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскармливать: PerfectVerb = {
  name: Word('вскармливать', 3),
  singular1stPerson: Word('вскармливаю', 3),
  singular2ndPerson: Word('вскармливаешь', 3),
  singular3rdPerson: Word('вскармливает', 3),
  plural1stPerson: Word('вскармливаем', 3),
  plural2ndPerson: Word('вскармливаете', 3),
  plural3rdPerson: Word('вскармливают', 3),
  masculinePast: Word('вскармливал', 3),
  femininePast: Word('вскармливала', 3),
  neuterPast: Word('вскармливало', 3),
  pluralPast: Word('вскармливали', 3),
  imperativeInformal: Word('вскармливай', 3),
  imperativeFormal: Word('вскармливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вскармливать.name.text, вскармливать);

export { вскармливать };