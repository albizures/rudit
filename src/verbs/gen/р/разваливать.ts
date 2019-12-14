import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разваливать: PerfectVerb = {
  name: Word('разваливать', 4),
  singular1stPerson: Word('разваливаю', 4),
  singular2ndPerson: Word('разваливаешь', 4),
  singular3rdPerson: Word('разваливает', 4),
  plural1stPerson: Word('разваливаем', 4),
  plural2ndPerson: Word('разваливаете', 4),
  plural3rdPerson: Word('разваливают', 4),
  masculinePast: Word('разваливал', 4),
  femininePast: Word('разваливала', 4),
  neuterPast: Word('разваливало', 4),
  pluralPast: Word('разваливали', 4),
  imperativeInformal: Word('разваливай', 4),
  imperativeFormal: Word('разваливайте', 4),
  imperfect: [],
};

perfectVerbs.set(разваливать.name.text, разваливать);

export { разваливать };