import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просмаливать: PerfectVerb = {
  name: Word('просмаливать', 5),
  singular1stPerson: Word('просмаливаю', 5),
  singular2ndPerson: Word('просмаливаешь', 5),
  singular3rdPerson: Word('просмаливает', 5),
  plural1stPerson: Word('просмаливаем', 5),
  plural2ndPerson: Word('просмаливаете', 5),
  plural3rdPerson: Word('просмаливают', 5),
  masculinePast: Word('просмаливал', 5),
  femininePast: Word('просмаливала', 5),
  neuterPast: Word('просмаливало', 5),
  pluralPast: Word('просмаливали', 5),
  imperativeInformal: Word('просмаливай', 5),
  imperativeFormal: Word('просмаливайте', 5),
  imperfect: [],
};

perfectVerbs.set(просмаливать.name.text, просмаливать);

export { просмаливать };