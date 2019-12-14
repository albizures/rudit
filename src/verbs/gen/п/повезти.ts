import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повезти: PerfectVerb = {
  name: Word('повезти', 6),
  singular1stPerson: Word('повезу', 5),
  singular2ndPerson: Word('повезёшь', 3),
  singular3rdPerson: Word('повезёт', 3),
  plural1stPerson: Word('повезём', 3),
  plural2ndPerson: Word('повезёте', 3),
  plural3rdPerson: Word('повезут', 5),
  masculinePast: Word('повёз', 1),
  femininePast: Word('повезла', 6),
  neuterPast: Word('повезло', 6),
  pluralPast: Word('повезли', 6),
  imperativeInformal: Word('повези', 5),
  imperativeFormal: Word('повезите', 5),
  imperfect: [],
};

perfectVerbs.set(повезти.name.text, повезти);

export { повезти };