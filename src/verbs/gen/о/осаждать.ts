import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осаждать: PerfectVerb = {
  name: Word('осаждать', 5),
  singular1stPerson: Word('осаждаю', 5),
  singular2ndPerson: Word('осаждаешь', 5),
  singular3rdPerson: Word('осаждает', 5),
  plural1stPerson: Word('осаждаем', 5),
  plural2ndPerson: Word('осаждаете', 5),
  plural3rdPerson: Word('осаждают', 5),
  masculinePast: Word('осаждал', 5),
  femininePast: Word('осаждала', 5),
  neuterPast: Word('осаждало', 5),
  pluralPast: Word('осаждали', 5),
  imperativeInformal: Word('осаждай', 5),
  imperativeFormal: Word('осаждайте', 5),
  imperfect: [],
};

perfectVerbs.set(осаждать.name.text, осаждать);

export { осаждать };