import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстукивать: PerfectVerb = {
  name: Word('отстукивать', 4),
  singular1stPerson: Word('отстукиваю', 4),
  singular2ndPerson: Word('отстукиваешь', 4),
  singular3rdPerson: Word('отстукивает', 4),
  plural1stPerson: Word('отстукиваем', 4),
  plural2ndPerson: Word('отстукиваете', 4),
  plural3rdPerson: Word('отстукивают', 4),
  masculinePast: Word('отстукивал', 4),
  femininePast: Word('отстукивала', 4),
  neuterPast: Word('отстукивало', 4),
  pluralPast: Word('отстукивали', 4),
  imperativeInformal: Word('отстукивай', 4),
  imperativeFormal: Word('отстукивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отстукивать.name.text, отстукивать);

export { отстукивать };