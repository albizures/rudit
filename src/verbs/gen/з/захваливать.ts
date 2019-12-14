import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захваливать: PerfectVerb = {
  name: Word('захваливать', 4),
  singular1stPerson: Word('захваливаю', 4),
  singular2ndPerson: Word('захваливаешь', 4),
  singular3rdPerson: Word('захваливает', 4),
  plural1stPerson: Word('захваливаем', 4),
  plural2ndPerson: Word('захваливаете', 4),
  plural3rdPerson: Word('захваливают', 4),
  masculinePast: Word('захваливал', 4),
  femininePast: Word('захваливала', 4),
  neuterPast: Word('захваливало', 4),
  pluralPast: Word('захваливали', 4),
  imperativeInformal: Word('захваливай', 4),
  imperativeFormal: Word('захваливайте', 4),
  imperfect: [],
};

perfectVerbs.set(захваливать.name.text, захваливать);

export { захваливать };