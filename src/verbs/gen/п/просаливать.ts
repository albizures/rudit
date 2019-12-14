import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просаливать: PerfectVerb = {
  name: Word('просаливать', 4),
  singular1stPerson: Word('просаливаю', 4),
  singular2ndPerson: Word('просаливаешь', 4),
  singular3rdPerson: Word('просаливает', 4),
  plural1stPerson: Word('просаливаем', 4),
  plural2ndPerson: Word('просаливаете', 4),
  plural3rdPerson: Word('просаливают', 4),
  masculinePast: Word('просаливал', 4),
  femininePast: Word('просаливала', 4),
  neuterPast: Word('просаливало', 4),
  pluralPast: Word('просаливали', 4),
  imperativeInformal: Word('просаливай', 4),
  imperativeFormal: Word('просаливайте', 4),
  imperfect: [],
};

perfectVerbs.set(просаливать.name.text, просаливать);

export { просаливать };