import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстукивать: PerfectVerb = {
  name: Word('выстукивать', 4),
  singular1stPerson: Word('выстукиваю', 4),
  singular2ndPerson: Word('выстукиваешь', 4),
  singular3rdPerson: Word('выстукивает', 4),
  plural1stPerson: Word('выстукиваем', 4),
  plural2ndPerson: Word('выстукиваете', 4),
  plural3rdPerson: Word('выстукивают', 4),
  masculinePast: Word('выстукивал', 4),
  femininePast: Word('выстукивала', 4),
  neuterPast: Word('выстукивало', 4),
  pluralPast: Word('выстукивали', 4),
  imperativeInformal: Word('выстукивай', 4),
  imperativeFormal: Word('выстукивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выстукивать.name.text, выстукивать);

export { выстукивать };