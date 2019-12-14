import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погуливать: PerfectVerb = {
  name: Word('погуливать', 3),
  singular1stPerson: Word('погуливаю', 3),
  singular2ndPerson: Word('погуливаешь', 3),
  singular3rdPerson: Word('погуливает', 3),
  plural1stPerson: Word('погуливаем', 3),
  plural2ndPerson: Word('погуливаете', 3),
  plural3rdPerson: Word('погуливают', 3),
  masculinePast: Word('погуливал', 3),
  femininePast: Word('погуливала', 3),
  neuterPast: Word('погуливало', 3),
  pluralPast: Word('погуливали', 3),
  imperativeInformal: Word('погуливай', 3),
  imperativeFormal: Word('погуливайте', 3),
  imperfect: [],
};

perfectVerbs.set(погуливать.name.text, погуливать);

export { погуливать };