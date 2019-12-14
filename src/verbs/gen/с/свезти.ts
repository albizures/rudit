import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свезти: PerfectVerb = {
  name: Word('свезти', 5),
  singular1stPerson: Word('свезу', 4),
  singular2ndPerson: Word('свезёшь', 4),
  singular3rdPerson: Word('свезёт', 4),
  plural1stPerson: Word('свезём', 4),
  plural2ndPerson: Word('свезёте', 4),
  plural3rdPerson: Word('свезут', 4),
  masculinePast: Word('свёз', 2),
  femininePast: Word('свезла', 5),
  neuterPast: Word('свезло', 5),
  pluralPast: Word('свезли', 5),
  imperativeInformal: Word('свези', 4),
  imperativeFormal: Word('свезите', 4),
  imperfect: [],
};

perfectVerbs.set(свезти.name.text, свезти);

export { свезти };