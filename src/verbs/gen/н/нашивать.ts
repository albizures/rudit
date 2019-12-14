import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашивать: PerfectVerb = {
  name: Word('нашивать', 5),
  singular1stPerson: Word('нашиваю', 5),
  singular2ndPerson: Word('нашиваешь', 5),
  singular3rdPerson: Word('нашивает', 5),
  plural1stPerson: Word('нашиваем', 5),
  plural2ndPerson: Word('нашиваете', 5),
  plural3rdPerson: Word('нашивают', 5),
  masculinePast: Word('нашивал', 5),
  femininePast: Word('нашивала', 5),
  neuterPast: Word('нашивало', 5),
  pluralPast: Word('нашивали', 5),
  imperativeInformal: Word('нашивай', 5),
  imperativeFormal: Word('нашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(нашивать.name.text, нашивать);

export { нашивать };