import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промасливать: PerfectVerb = {
  name: Word('промасливать', 4),
  singular1stPerson: Word('промасливаю', 4),
  singular2ndPerson: Word('промасливаешь', 4),
  singular3rdPerson: Word('промасливает', 4),
  plural1stPerson: Word('промасливаем', 4),
  plural2ndPerson: Word('промасливаете', 4),
  plural3rdPerson: Word('промасливают', 4),
  masculinePast: Word('промасливал', 4),
  femininePast: Word('промасливала', 4),
  neuterPast: Word('промасливало', 4),
  pluralPast: Word('промасливали', 4),
  imperativeInformal: Word('промасливай', 4),
  imperativeFormal: Word('промасливайте', 4),
  imperfect: [],
};

perfectVerbs.set(промасливать.name.text, промасливать);

export { промасливать };