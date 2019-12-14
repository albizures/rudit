import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подхихикивать: PerfectVerb = {
  name: Word('подхихикивать', 6),
  singular1stPerson: Word('подхихикиваю', 6),
  singular2ndPerson: Word('подхихикиваешь', 6),
  singular3rdPerson: Word('подхихикивает', 6),
  plural1stPerson: Word('подхихикиваем', 6),
  plural2ndPerson: Word('подхихикиваете', 6),
  plural3rdPerson: Word('подхихикивают', 6),
  masculinePast: Word('подхихикивал', 6),
  femininePast: Word('подхихикивала', 6),
  neuterPast: Word('подхихикивало', 6),
  pluralPast: Word('подхихикивали', 6),
  imperativeInformal: Word('подхихикивай', 6),
  imperativeFormal: Word('подхихикивайте', 6),
  imperfect: [],
};

perfectVerbs.set(подхихикивать.name.text, подхихикивать);

export { подхихикивать };