import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышелушивать: PerfectVerb = {
  name: Word('вышелушивать', 5),
  singular1stPerson: Word('вышелушиваю', 5),
  singular2ndPerson: Word('вышелушиваешь', 5),
  singular3rdPerson: Word('вышелушивает', 5),
  plural1stPerson: Word('вышелушиваем', 5),
  plural2ndPerson: Word('вышелушиваете', 5),
  plural3rdPerson: Word('вышелушивают', 5),
  masculinePast: Word('вышелушивал', 5),
  femininePast: Word('вышелушивала', 5),
  neuterPast: Word('вышелушивало', 5),
  pluralPast: Word('вышелушивали', 5),
  imperativeInformal: Word('вышелушивай', 5),
  imperativeFormal: Word('вышелушивайте', 5),
  imperfect: [],
};

perfectVerbs.set(вышелушивать.name.text, вышелушивать);

export { вышелушивать };