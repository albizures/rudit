import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скрашивать: PerfectVerb = {
  name: Word('скрашивать', 3),
  singular1stPerson: Word('скрашиваю', 3),
  singular2ndPerson: Word('скрашиваешь', 3),
  singular3rdPerson: Word('скрашивает', 3),
  plural1stPerson: Word('скрашиваем', 3),
  plural2ndPerson: Word('скрашиваете', 3),
  plural3rdPerson: Word('скрашивают', 3),
  masculinePast: Word('скрашивал', 3),
  femininePast: Word('скрашивала', 3),
  neuterPast: Word('скрашивало', 3),
  pluralPast: Word('скрашивали', 3),
  imperativeInformal: Word('скрашивай', 3),
  imperativeFormal: Word('скрашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(скрашивать.name.text, скрашивать);

export { скрашивать };