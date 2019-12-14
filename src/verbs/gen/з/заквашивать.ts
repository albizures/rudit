import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заквашивать: PerfectVerb = {
  name: Word('заквашивать', 4),
  singular1stPerson: Word('заквашиваю', 4),
  singular2ndPerson: Word('заквашиваешь', 4),
  singular3rdPerson: Word('заквашивает', 4),
  plural1stPerson: Word('заквашиваем', 4),
  plural2ndPerson: Word('заквашиваете', 4),
  plural3rdPerson: Word('заквашивают', 4),
  masculinePast: Word('заквашивал', 4),
  femininePast: Word('заквашивала', 4),
  neuterPast: Word('заквашивало', 4),
  pluralPast: Word('заквашивали', 4),
  imperativeInformal: Word('заквашивай', 4),
  imperativeFormal: Word('заквашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(заквашивать.name.text, заквашивать);

export { заквашивать };