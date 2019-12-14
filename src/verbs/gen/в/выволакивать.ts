import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выволакивать: PerfectVerb = {
  name: Word('выволакивать', 5),
  singular1stPerson: Word('выволакиваю', 5),
  singular2ndPerson: Word('выволакиваешь', 5),
  singular3rdPerson: Word('выволакивает', 5),
  plural1stPerson: Word('выволакиваем', 5),
  plural2ndPerson: Word('выволакиваете', 5),
  plural3rdPerson: Word('выволакивают', 5),
  masculinePast: Word('выволакивал', 5),
  femininePast: Word('выволакивала', 5),
  neuterPast: Word('выволакивало', 5),
  pluralPast: Word('выволакивали', 5),
  imperativeInformal: Word('выволакивай', 5),
  imperativeFormal: Word('выволакивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выволакивать.name.text, выволакивать);

export { выволакивать };