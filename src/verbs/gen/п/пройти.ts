import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пройти: PerfectVerb = {
  name: Word('пройти', 5),
  singular1stPerson: Word('пройду', 5),
  singular2ndPerson: Word('пройдёшь', 5),
  singular3rdPerson: Word('пройдёт', 5),
  plural1stPerson: Word('пройдём', 5),
  plural2ndPerson: Word('пройдёте', 5),
  plural3rdPerson: Word('пройдут', 5),
  masculinePast: Word('прошёл', 4),
  femininePast: Word('прошла', 5),
  neuterPast: Word('прошло', 5),
  pluralPast: Word('прошли', 5),
  imperativeInformal: Word('пройди', 5),
  imperativeFormal: Word('пройдите', 5),
  imperfect: [],
};

perfectVerbs.set(пройти.name.text, пройти);

export { пройти };