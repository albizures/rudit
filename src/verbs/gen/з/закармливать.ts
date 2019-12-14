import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закармливать: PerfectVerb = {
  name: Word('закармливать', 3),
  singular1stPerson: Word('закармливаю', 3),
  singular2ndPerson: Word('закармливаешь', 3),
  singular3rdPerson: Word('закармливает', 3),
  plural1stPerson: Word('закармливаем', 3),
  plural2ndPerson: Word('закармливаете', 3),
  plural3rdPerson: Word('закармливают', 3),
  masculinePast: Word('закармливал', 3),
  femininePast: Word('закармливала', 3),
  neuterPast: Word('закармливало', 3),
  pluralPast: Word('закармливали', 3),
  imperativeInformal: Word('закармливай', 3),
  imperativeFormal: Word('закармливайте', 3),
  imperfect: [],
};

perfectVerbs.set(закармливать.name.text, закармливать);

export { закармливать };