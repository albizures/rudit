import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const везти: PerfectVerb = {
  name: Word('везти', 4),
  singular1stPerson: Word('везу', 3),
  singular2ndPerson: Word('везёшь', 1),
  singular3rdPerson: Word('везёт', 1),
  plural1stPerson: Word('везём', 1),
  plural2ndPerson: Word('везёте', 1),
  plural3rdPerson: Word('везут', 3),
  masculinePast: Word('вёз', 1),
  femininePast: Word('везла', 4),
  neuterPast: Word('везло', 4),
  pluralPast: Word('везли', 4),
  imperativeInformal: Word('вези', 3),
  imperativeFormal: Word('везите', 3),
  imperfect: [],
};

perfectVerbs.set(везти.name.text, везти);

export { везти };