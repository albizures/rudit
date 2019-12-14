import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повезти: PerfectVerb = {
  name: Word('повезти', 6),
  singular1stPerson: Word('повезу', 5),
  singular2ndPerson: Word('повезёшь', 5),
  singular3rdPerson: Word('повезёт', 5),
  plural1stPerson: Word('повезём', 5),
  plural2ndPerson: Word('повезёте', 5),
  plural3rdPerson: Word('повезут', 5),
  masculinePast: Word('повёз', 3),
  femininePast: Word('повезла', 6),
  neuterPast: Word('повезло', 6),
  pluralPast: Word('повезли', 6),
  imperativeInformal: Word('повези', 5),
  imperativeFormal: Word('повезите', 5),
  imperfect: [],
};

perfectVerbs.set(повезти.name.text, повезти);

export { повезти };