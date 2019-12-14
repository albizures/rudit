import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокрашивать: PerfectVerb = {
  name: Word('прокрашивать', 5),
  singular1stPerson: Word('прокрашиваю', 5),
  singular2ndPerson: Word('прокрашиваешь', 5),
  singular3rdPerson: Word('прокрашивает', 5),
  plural1stPerson: Word('прокрашиваем', 5),
  plural2ndPerson: Word('прокрашиваете', 5),
  plural3rdPerson: Word('прокрашивают', 5),
  masculinePast: Word('прокрашивал', 5),
  femininePast: Word('прокрашивала', 5),
  neuterPast: Word('прокрашивало', 5),
  pluralPast: Word('прокрашивали', 5),
  imperativeInformal: Word('прокрашивай', 5),
  imperativeFormal: Word('прокрашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(прокрашивать.name.text, прокрашивать);

export { прокрашивать };