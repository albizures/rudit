import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подыскивать: PerfectVerb = {
  name: Word('подыскивать', 3),
  singular1stPerson: Word('подыскиваю', 3),
  singular2ndPerson: Word('подыскиваешь', 3),
  singular3rdPerson: Word('подыскивает', 3),
  plural1stPerson: Word('подыскиваем', 3),
  plural2ndPerson: Word('подыскиваете', 3),
  plural3rdPerson: Word('подыскивают', 3),
  masculinePast: Word('подыскивал', 3),
  femininePast: Word('подыскивала', 3),
  neuterPast: Word('подыскивало', 3),
  pluralPast: Word('подыскивали', 3),
  imperativeInformal: Word('подыскивай', 3),
  imperativeFormal: Word('подыскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(подыскивать.name.text, подыскивать);

export { подыскивать };