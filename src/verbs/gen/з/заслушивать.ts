import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслушивать: PerfectVerb = {
  name: Word('заслушивать', 4),
  singular1stPerson: Word('заслушиваю', 4),
  singular2ndPerson: Word('заслушиваешь', 4),
  singular3rdPerson: Word('заслушивает', 4),
  plural1stPerson: Word('заслушиваем', 4),
  plural2ndPerson: Word('заслушиваете', 4),
  plural3rdPerson: Word('заслушивают', 4),
  masculinePast: Word('заслушивал', 4),
  femininePast: Word('заслушивала', 4),
  neuterPast: Word('заслушивало', 4),
  pluralPast: Word('заслушивали', 4),
  imperativeInformal: Word('заслушивай', 4),
  imperativeFormal: Word('заслушивайте', 4),
  imperfect: [],
};

perfectVerbs.set(заслушивать.name.text, заслушивать);

export { заслушивать };