import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довезти: PerfectVerb = {
  name: Word('довезти', 6),
  singular1stPerson: Word('довезу', 5),
  singular2ndPerson: Word('довезёшь', 5),
  singular3rdPerson: Word('довезёт', 5),
  plural1stPerson: Word('довезём', 5),
  plural2ndPerson: Word('довезёте', 5),
  plural3rdPerson: Word('довезут', 5),
  masculinePast: Word('довёз', 3),
  femininePast: Word('довезла', 6),
  neuterPast: Word('довезло', 6),
  pluralPast: Word('довезли', 6),
  imperativeInformal: Word('довези', 5),
  imperativeFormal: Word('довезите', 5),
  imperfect: [],
};

perfectVerbs.set(довезти.name.text, довезти);

export { довезти };