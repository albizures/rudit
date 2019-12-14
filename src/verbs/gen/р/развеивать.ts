import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развеивать: PerfectVerb = {
  name: Word('развеивать', 4),
  singular1stPerson: Word('развеиваю', 4),
  singular2ndPerson: Word('развеиваешь', 4),
  singular3rdPerson: Word('развеивает', 4),
  plural1stPerson: Word('развеиваем', 4),
  plural2ndPerson: Word('развеиваете', 4),
  plural3rdPerson: Word('развеивают', 4),
  masculinePast: Word('развеивал', 4),
  femininePast: Word('развеивала', 4),
  neuterPast: Word('развеивало', 4),
  pluralPast: Word('развеивали', 4),
  imperativeInformal: Word('развеивай', 4),
  imperativeFormal: Word('развеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(развеивать.name.text, развеивать);

export { развеивать };