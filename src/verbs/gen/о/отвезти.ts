import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвезти: PerfectVerb = {
  name: Word('отвезти', 6),
  singular1stPerson: Word('отвезу', 5),
  singular2ndPerson: Word('отвезёшь', 5),
  singular3rdPerson: Word('отвезёт', 5),
  plural1stPerson: Word('отвезём', 5),
  plural2ndPerson: Word('отвезёте', 5),
  plural3rdPerson: Word('отвезут', 5),
  masculinePast: Word('отвёз', 3),
  femininePast: Word('отвезла', 6),
  neuterPast: Word('отвезло', 6),
  pluralPast: Word('отвезли', 6),
  imperativeInformal: Word('отвези', 5),
  imperativeFormal: Word('отвезите', 5),
  imperfect: [],
};

perfectVerbs.set(отвезти.name.text, отвезти);

export { отвезти };