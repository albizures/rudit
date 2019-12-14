import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвезти: PerfectVerb = {
  name: Word('отвезти', 6),
  singular1stPerson: Word('отвезу', 5),
  singular2ndPerson: Word('отвезёшь', 3),
  singular3rdPerson: Word('отвезёт', 3),
  plural1stPerson: Word('отвезём', 3),
  plural2ndPerson: Word('отвезёте', 3),
  plural3rdPerson: Word('отвезут', 5),
  masculinePast: Word('отвёз', 0),
  femininePast: Word('отвезла', 6),
  neuterPast: Word('отвезло', 6),
  pluralPast: Word('отвезли', 6),
  imperativeInformal: Word('отвези', 5),
  imperativeFormal: Word('отвезите', 5),
  imperfect: [],
};

perfectVerbs.set(отвезти.name.text, отвезти);

export { отвезти };