import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совать: PerfectVerb = {
  name: Word('совать', 3),
  singular1stPerson: Word('сую', 2),
  singular2ndPerson: Word('суёшь', 1),
  singular3rdPerson: Word('суёт', 1),
  plural1stPerson: Word('суём', 1),
  plural2ndPerson: Word('суёте', 4),
  plural3rdPerson: Word('суют', 2),
  masculinePast: Word('совал', 3),
  femininePast: Word('совала', 3),
  neuterPast: Word('совало', 3),
  pluralPast: Word('совали', 3),
  imperativeInformal: Word('суй', 1),
  imperativeFormal: Word('суйте', 1),
  imperfect: ['сунуть'],
};

perfectVerbs.set(совать.name.text, совать);

export { совать };