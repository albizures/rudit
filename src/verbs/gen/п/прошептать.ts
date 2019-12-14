import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошептать: PerfectVerb = {
  name: Word('прошептать', 7),
  singular1stPerson: Word('прошепчу', 7),
  singular2ndPerson: Word('прошепчешь', 4),
  singular3rdPerson: Word('прошепчет', 4),
  plural1stPerson: Word('прошепчем', 4),
  plural2ndPerson: Word('прошепчете', 4),
  plural3rdPerson: Word('прошепчут', 4),
  masculinePast: Word('прошептал', 7),
  femininePast: Word('прошептала', 7),
  neuterPast: Word('прошептало', 7),
  pluralPast: Word('прошептали', 7),
  imperativeInformal: Word('прошепчи', 7),
  imperativeFormal: Word('прошепчите', 7),
  imperfect: [],
};

perfectVerbs.set(прошептать.name.text, прошептать);

export { прошептать };