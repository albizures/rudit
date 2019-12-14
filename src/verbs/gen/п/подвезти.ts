import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвезти: PerfectVerb = {
  name: Word('подвезти', 7),
  singular1stPerson: Word('подвезу', 6),
  singular2ndPerson: Word('подвезёшь', 6),
  singular3rdPerson: Word('подвезёт', 6),
  plural1stPerson: Word('подвезём', 6),
  plural2ndPerson: Word('подвезёте', 6),
  plural3rdPerson: Word('подвезут', 6),
  masculinePast: Word('подвёз', 4),
  femininePast: Word('подвезла', 7),
  neuterPast: Word('подвезло', 7),
  pluralPast: Word('подвезли', 7),
  imperativeInformal: Word('подвези', 6),
  imperativeFormal: Word('подвезите', 6),
  imperfect: [],
};

perfectVerbs.set(подвезти.name.text, подвезти);

export { подвезти };