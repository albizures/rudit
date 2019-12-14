import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разливать: PerfectVerb = {
  name: Word('разливать', 6),
  singular1stPerson: Word('разливаю', 6),
  singular2ndPerson: Word('разливаешь', 6),
  singular3rdPerson: Word('разливает', 6),
  plural1stPerson: Word('разливаем', 6),
  plural2ndPerson: Word('разливаете', 6),
  plural3rdPerson: Word('разливают', 6),
  masculinePast: Word('разливал', 6),
  femininePast: Word('разливала', 6),
  neuterPast: Word('разливало', 6),
  pluralPast: Word('разливали', 6),
  imperativeInformal: Word('разливай', 6),
  imperativeFormal: Word('разливайте', 6),
  imperfect: [],
};

perfectVerbs.set(разливать.name.text, разливать);

export { разливать };