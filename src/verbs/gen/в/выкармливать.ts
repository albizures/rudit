import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкармливать: PerfectVerb = {
  name: Word('выкармливать', 3),
  singular1stPerson: Word('выкармливаю', 3),
  singular2ndPerson: Word('выкармливаешь', 3),
  singular3rdPerson: Word('выкармливает', 3),
  plural1stPerson: Word('выкармливаем', 3),
  plural2ndPerson: Word('выкармливаете', 3),
  plural3rdPerson: Word('выкармливают', 3),
  masculinePast: Word('выкармливал', 3),
  femininePast: Word('выкармливала', 3),
  neuterPast: Word('выкармливало', 3),
  pluralPast: Word('выкармливали', 3),
  imperativeInformal: Word('выкармливай', 3),
  imperativeFormal: Word('выкармливайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкармливать.name.text, выкармливать);

export { выкармливать };