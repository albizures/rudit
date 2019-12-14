import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const онемечивать: PerfectVerb = {
  name: Word('онемечивать', 4),
  singular1stPerson: Word('онемечиваю', 4),
  singular2ndPerson: Word('онемечиваешь', 4),
  singular3rdPerson: Word('онемечивает', 4),
  plural1stPerson: Word('онемечиваем', 4),
  plural2ndPerson: Word('онемечиваете', 4),
  plural3rdPerson: Word('онемечивают', 4),
  masculinePast: Word('онемечивал', 4),
  femininePast: Word('онемечивала', 4),
  neuterPast: Word('онемечивало', 4),
  pluralPast: Word('онемечивали', 4),
  imperativeInformal: Word('онемечивай', 4),
  imperativeFormal: Word('онемечивайте', 4),
  imperfect: [],
};

perfectVerbs.set(онемечивать.name.text, онемечивать);

export { онемечивать };