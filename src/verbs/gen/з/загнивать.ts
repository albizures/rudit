import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загнивать: PerfectVerb = {
  name: Word('загнивать', 6),
  singular1stPerson: Word('загниваю', 6),
  singular2ndPerson: Word('загниваешь', 6),
  singular3rdPerson: Word('загнивает', 6),
  plural1stPerson: Word('загниваем', 6),
  plural2ndPerson: Word('загниваете', 6),
  plural3rdPerson: Word('загнивают', 6),
  masculinePast: Word('загнивал', 6),
  femininePast: Word('загнивала', 6),
  neuterPast: Word('загнивало', 6),
  pluralPast: Word('загнивали', 6),
  imperativeInformal: Word('загнивай', 6),
  imperativeFormal: Word('загнивайте', 6),
  imperfect: [],
};

perfectVerbs.set(загнивать.name.text, загнивать);

export { загнивать };