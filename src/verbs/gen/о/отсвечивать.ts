import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсвечивать: PerfectVerb = {
  name: Word('отсвечивать', 4),
  singular1stPerson: Word('отсвечиваю', 4),
  singular2ndPerson: Word('отсвечиваешь', 4),
  singular3rdPerson: Word('отсвечивает', 4),
  plural1stPerson: Word('отсвечиваем', 4),
  plural2ndPerson: Word('отсвечиваете', 4),
  plural3rdPerson: Word('отсвечивают', 4),
  masculinePast: Word('отсвечивал', 4),
  femininePast: Word('отсвечивала', 4),
  neuterPast: Word('отсвечивало', 4),
  pluralPast: Word('отсвечивали', 4),
  imperativeInformal: Word('отсвечивай', 4),
  imperativeFormal: Word('отсвечивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отсвечивать.name.text, отсвечивать);

export { отсвечивать };