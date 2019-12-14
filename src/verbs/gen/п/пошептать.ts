import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошептать: PerfectVerb = {
  name: Word('пошептать', 6),
  singular1stPerson: Word('пошепчу', 6),
  singular2ndPerson: Word('пошепчешь', 3),
  singular3rdPerson: Word('пошепчет', 3),
  plural1stPerson: Word('пошепчем', 3),
  plural2ndPerson: Word('пошепчете', 3),
  plural3rdPerson: Word('пошепчут', 3),
  masculinePast: Word('пошептал', 6),
  femininePast: Word('пошептала', 6),
  neuterPast: Word('пошептало', 6),
  pluralPast: Word('пошептали', 6),
  imperativeInformal: Word('пошепчи', 6),
  imperativeFormal: Word('пошепчите', 6),
  imperfect: [],
};

perfectVerbs.set(пошептать.name.text, пошептать);

export { пошептать };