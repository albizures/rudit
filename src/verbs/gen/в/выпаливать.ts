import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпаливать: PerfectVerb = {
  name: Word('выпаливать', 3),
  singular1stPerson: Word('выпаливаю', 3),
  singular2ndPerson: Word('выпаливаешь', 3),
  singular3rdPerson: Word('выпаливает', 3),
  plural1stPerson: Word('выпаливаем', 3),
  plural2ndPerson: Word('выпаливаете', 3),
  plural3rdPerson: Word('выпаливают', 3),
  masculinePast: Word('выпаливал', 3),
  femininePast: Word('выпаливала', 3),
  neuterPast: Word('выпаливало', 3),
  pluralPast: Word('выпаливали', 3),
  imperativeInformal: Word('выпаливай', 3),
  imperativeFormal: Word('выпаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпаливать.name.text, выпаливать);

export { выпаливать };