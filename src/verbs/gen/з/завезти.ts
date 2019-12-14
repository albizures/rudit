import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завезти: PerfectVerb = {
  name: Word('завезти', 6),
  singular1stPerson: Word('завезу', 5),
  singular2ndPerson: Word('завезёшь', 1),
  singular3rdPerson: Word('завезёт', 1),
  plural1stPerson: Word('завезём', 1),
  plural2ndPerson: Word('завезёте', 1),
  plural3rdPerson: Word('завезут', 5),
  masculinePast: Word('завёз', 1),
  femininePast: Word('завезла', 6),
  neuterPast: Word('завезло', 6),
  pluralPast: Word('завезли', 6),
  imperativeInformal: Word('завези', 5),
  imperativeFormal: Word('завезите', 5),
  imperfect: [],
};

perfectVerbs.set(завезти.name.text, завезти);

export { завезти };