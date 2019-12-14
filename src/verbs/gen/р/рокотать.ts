import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рокотать: PerfectVerb = {
  name: Word('рокотать', 5),
  singular1stPerson: Word('рокочу', 5),
  singular2ndPerson: Word('рокочешь', 3),
  singular3rdPerson: Word('рокочет', 3),
  plural1stPerson: Word('рокочем', 3),
  plural2ndPerson: Word('рокочете', 3),
  plural3rdPerson: Word('рокочут', 3),
  masculinePast: Word('рокотал', 5),
  femininePast: Word('рокотала', 5),
  neuterPast: Word('рокотало', 5),
  pluralPast: Word('рокотали', 5),
  imperativeInformal: Word('рокочи', 5),
  imperativeFormal: Word('рокочите', 5),
  imperfect: [],
};

perfectVerbs.set(рокотать.name.text, рокотать);

export { рокотать };