import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отливать: PerfectVerb = {
  name: Word('отливать', 5),
  singular1stPerson: Word('отливаю', 5),
  singular2ndPerson: Word('отливаешь', 5),
  singular3rdPerson: Word('отливает', 5),
  plural1stPerson: Word('отливаем', 5),
  plural2ndPerson: Word('отливаете', 5),
  plural3rdPerson: Word('отливают', 5),
  masculinePast: Word('отливал', 5),
  femininePast: Word('отливала', 5),
  neuterPast: Word('отливало', 5),
  pluralPast: Word('отливали', 5),
  imperativeInformal: Word('отливай', 5),
  imperativeFormal: Word('отливайте', 5),
  imperfect: [],
};

perfectVerbs.set(отливать.name.text, отливать);

export { отливать };