import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наваливать: PerfectVerb = {
  name: Word('наваливать', 3),
  singular1stPerson: Word('наваливаю', 3),
  singular2ndPerson: Word('наваливаешь', 3),
  singular3rdPerson: Word('наваливает', 3),
  plural1stPerson: Word('наваливаем', 3),
  plural2ndPerson: Word('наваливаете', 3),
  plural3rdPerson: Word('наваливают', 3),
  masculinePast: Word('наваливал', 3),
  femininePast: Word('наваливала', 3),
  neuterPast: Word('наваливало', 3),
  pluralPast: Word('наваливали', 3),
  imperativeInformal: Word('наваливай', 3),
  imperativeFormal: Word('наваливайте', 3),
  imperfect: [],
};

perfectVerbs.set(наваливать.name.text, наваливать);

export { наваливать };