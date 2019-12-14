import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддакивать: PerfectVerb = {
  name: Word('поддакивать', 4),
  singular1stPerson: Word('поддакиваю', 4),
  singular2ndPerson: Word('поддакиваешь', 4),
  singular3rdPerson: Word('поддакивает', 4),
  plural1stPerson: Word('поддакиваем', 4),
  plural2ndPerson: Word('поддакиваете', 4),
  plural3rdPerson: Word('поддакивают', 4),
  masculinePast: Word('поддакивал', 4),
  femininePast: Word('поддакивала', 4),
  neuterPast: Word('поддакивало', 4),
  pluralPast: Word('поддакивали', 4),
  imperativeInformal: Word('поддакивай', 4),
  imperativeFormal: Word('поддакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(поддакивать.name.text, поддакивать);

export { поддакивать };