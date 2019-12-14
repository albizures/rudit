import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгуливать: PerfectVerb = {
  name: Word('отгуливать', 3),
  singular1stPerson: Word('отгуливаю', 3),
  singular2ndPerson: Word('отгуливаешь', 3),
  singular3rdPerson: Word('отгуливает', 3),
  plural1stPerson: Word('отгуливаем', 3),
  plural2ndPerson: Word('отгуливаете', 3),
  plural3rdPerson: Word('отгуливают', 3),
  masculinePast: Word('отгуливал', 3),
  femininePast: Word('отгуливала', 3),
  neuterPast: Word('отгуливало', 3),
  pluralPast: Word('отгуливали', 3),
  imperativeInformal: Word('отгуливай', 3),
  imperativeFormal: Word('отгуливайте', 3),
  imperfect: [],
};

perfectVerbs.set(отгуливать.name.text, отгуливать);

export { отгуливать };