import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развезти: PerfectVerb = {
  name: Word('развезти', 7),
  singular1stPerson: Word('развезу', 6),
  singular2ndPerson: Word('развезёшь', 6),
  singular3rdPerson: Word('развезёт', 6),
  plural1stPerson: Word('развезём', 6),
  plural2ndPerson: Word('развезёте', 6),
  plural3rdPerson: Word('развезут', 6),
  masculinePast: Word('развёз', 4),
  femininePast: Word('развезла', 7),
  neuterPast: Word('развезло', 7),
  pluralPast: Word('развезли', 7),
  imperativeInformal: Word('развези', 6),
  imperativeFormal: Word('развезите', 6),
  imperfect: [],
};

perfectVerbs.set(развезти.name.text, развезти);

export { развезти };