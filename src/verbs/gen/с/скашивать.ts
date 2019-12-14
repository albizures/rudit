import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скашивать: PerfectVerb = {
  name: Word('скашивать', 2),
  singular1stPerson: Word('скашиваю', 2),
  singular2ndPerson: Word('скашиваешь', 2),
  singular3rdPerson: Word('скашивает', 2),
  plural1stPerson: Word('скашиваем', 2),
  plural2ndPerson: Word('скашиваете', 2),
  plural3rdPerson: Word('скашивают', 2),
  masculinePast: Word('скашивал', 2),
  femininePast: Word('скашивала', 2),
  neuterPast: Word('скашивало', 2),
  pluralPast: Word('скашивали', 2),
  imperativeInformal: Word('скашивай', 2),
  imperativeFormal: Word('скашивайте', 2),
  imperfect: [],
};

perfectVerbs.set(скашивать.name.text, скашивать);

export { скашивать };