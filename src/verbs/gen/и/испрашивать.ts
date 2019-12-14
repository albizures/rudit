import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испрашивать: PerfectVerb = {
  name: Word('испрашивать', 4),
  singular1stPerson: Word('испрашиваю', 4),
  singular2ndPerson: Word('испрашиваешь', 4),
  singular3rdPerson: Word('испрашивает', 4),
  plural1stPerson: Word('испрашиваем', 4),
  plural2ndPerson: Word('испрашиваете', 4),
  plural3rdPerson: Word('испрашивают', 4),
  masculinePast: Word('испрашивал', 4),
  femininePast: Word('испрашивала', 4),
  neuterPast: Word('испрашивало', 4),
  pluralPast: Word('испрашивали', 4),
  imperativeInformal: Word('испрашивай', 4),
  imperativeFormal: Word('испрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(испрашивать.name.text, испрашивать);

export { испрашивать };