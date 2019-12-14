import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увезти: PerfectVerb = {
  name: Word('увезти', 5),
  singular1stPerson: Word('увезу', 4),
  singular2ndPerson: Word('увезёшь', 2),
  singular3rdPerson: Word('увезёт', 2),
  plural1stPerson: Word('увезём', 2),
  plural2ndPerson: Word('увезёте', 2),
  plural3rdPerson: Word('увезут', 4),
  masculinePast: Word('увёз', 0),
  femininePast: Word('увезла', 5),
  neuterPast: Word('увезло', 5),
  pluralPast: Word('увезли', 5),
  imperativeInformal: Word('увези', 4),
  imperativeFormal: Word('увезите', 4),
  imperfect: [],
};

perfectVerbs.set(увезти.name.text, увезти);

export { увезти };