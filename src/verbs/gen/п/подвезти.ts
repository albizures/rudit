import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвезти: PerfectVerb = {
  name: Word('подвезти', 7),
  singular1stPerson: Word('подвезу', 6),
  singular2ndPerson: Word('подвезёшь', 4),
  singular3rdPerson: Word('подвезёт', 4),
  plural1stPerson: Word('подвезём', 4),
  plural2ndPerson: Word('подвезёте', 4),
  plural3rdPerson: Word('подвезут', 6),
  masculinePast: Word('подвёз', 1),
  femininePast: Word('подвезла', 7),
  neuterPast: Word('подвезло', 7),
  pluralPast: Word('подвезли', 7),
  imperativeInformal: Word('подвези', 6),
  imperativeFormal: Word('подвезите', 6),
  imperfect: [],
};

perfectVerbs.set(подвезти.name.text, подвезти);

export { подвезти };