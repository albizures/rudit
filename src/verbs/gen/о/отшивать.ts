import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшивать: PerfectVerb = {
  name: Word('отшивать', 5),
  singular1stPerson: Word('отшиваю', 5),
  singular2ndPerson: Word('отшиваешь', 5),
  singular3rdPerson: Word('отшивает', 5),
  plural1stPerson: Word('отшиваем', 5),
  plural2ndPerson: Word('отшиваете', 5),
  plural3rdPerson: Word('отшивают', 5),
  masculinePast: Word('отшивал', 5),
  femininePast: Word('отшивала', 5),
  neuterPast: Word('отшивало', 5),
  pluralPast: Word('отшивали', 5),
  imperativeInformal: Word('отшивай', 5),
  imperativeFormal: Word('отшивайте', 5),
  imperfect: [],
};

perfectVerbs.set(отшивать.name.text, отшивать);

export { отшивать };