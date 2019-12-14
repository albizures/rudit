import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намешивать: PerfectVerb = {
  name: Word('намешивать', 3),
  singular1stPerson: Word('намешиваю', 3),
  singular2ndPerson: Word('намешиваешь', 3),
  singular3rdPerson: Word('намешивает', 3),
  plural1stPerson: Word('намешиваем', 3),
  plural2ndPerson: Word('намешиваете', 3),
  plural3rdPerson: Word('намешивают', 3),
  masculinePast: Word('намешивал', 3),
  femininePast: Word('намешивала', 3),
  neuterPast: Word('намешивало', 3),
  pluralPast: Word('намешивали', 3),
  imperativeInformal: Word('намешивай', 3),
  imperativeFormal: Word('намешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(намешивать.name.text, намешивать);

export { намешивать };