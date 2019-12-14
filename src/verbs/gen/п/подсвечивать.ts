import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсвечивать: PerfectVerb = {
  name: Word('подсвечивать', 5),
  singular1stPerson: Word('подсвечиваю', 5),
  singular2ndPerson: Word('подсвечиваешь', 5),
  singular3rdPerson: Word('подсвечивает', 5),
  plural1stPerson: Word('подсвечиваем', 5),
  plural2ndPerson: Word('подсвечиваете', 5),
  plural3rdPerson: Word('подсвечивают', 5),
  masculinePast: Word('подсвечивал', 5),
  femininePast: Word('подсвечивала', 5),
  neuterPast: Word('подсвечивало', 5),
  pluralPast: Word('подсвечивали', 5),
  imperativeInformal: Word('подсвечивай', 5),
  imperativeFormal: Word('подсвечивайте', 5),
  imperfect: [],
};

perfectVerbs.set(подсвечивать.name.text, подсвечивать);

export { подсвечивать };