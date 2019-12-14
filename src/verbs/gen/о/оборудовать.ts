import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборудовать: PerfectVerb = {
  name: Word('оборудовать', 4),
  singular1stPerson: Word('оборудую', 4),
  singular2ndPerson: Word('оборудуешь', 4),
  singular3rdPerson: Word('оборудует', 4),
  plural1stPerson: Word('оборудуем', 4),
  plural2ndPerson: Word('оборудуете', 4),
  plural3rdPerson: Word('оборудуют', 4),
  masculinePast: Word('оборудовал', 4),
  femininePast: Word('оборудовала', 4),
  neuterPast: Word('оборудовало', 4),
  pluralPast: Word('оборудовали', 4),
  imperativeInformal: Word('оборудуй', 4),
  imperativeFormal: Word('оборудуйте', 4),
  imperfect: [],
};

perfectVerbs.set(оборудовать.name.text, оборудовать);

export { оборудовать };