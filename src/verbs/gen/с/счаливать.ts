import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const счаливать: PerfectVerb = {
  name: Word('счаливать', 2),
  singular1stPerson: Word('счаливаю', 2),
  singular2ndPerson: Word('счаливаешь', 2),
  singular3rdPerson: Word('счаливает', 2),
  plural1stPerson: Word('счаливаем', 2),
  plural2ndPerson: Word('счаливаете', 2),
  plural3rdPerson: Word('счаливают', 2),
  masculinePast: Word('счаливал', 2),
  femininePast: Word('счаливала', 2),
  neuterPast: Word('счаливало', 2),
  pluralPast: Word('счаливали', 2),
  imperativeInformal: Word('счаливай', 2),
  imperativeFormal: Word('счаливайте', 2),
  imperfect: [],
};

perfectVerbs.set(счаливать.name.text, счаливать);

export { счаливать };