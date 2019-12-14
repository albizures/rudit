import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытягивать: PerfectVerb = {
  name: Word('вытягивать', 3),
  singular1stPerson: Word('вытягиваю', 3),
  singular2ndPerson: Word('вытягиваешь', 3),
  singular3rdPerson: Word('вытягивает', 3),
  plural1stPerson: Word('вытягиваем', 3),
  plural2ndPerson: Word('вытягиваете', 3),
  plural3rdPerson: Word('вытягивают', 3),
  masculinePast: Word('вытягивал', 3),
  femininePast: Word('вытягивала', 3),
  neuterPast: Word('вытягивало', 3),
  pluralPast: Word('вытягивали', 3),
  imperativeInformal: Word('вытягивай', 3),
  imperativeFormal: Word('вытягивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вытягивать.name.text, вытягивать);

export { вытягивать };