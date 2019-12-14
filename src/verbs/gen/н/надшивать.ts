import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надшивать: PerfectVerb = {
  name: Word('надшивать', 6),
  singular1stPerson: Word('надшиваю', 6),
  singular2ndPerson: Word('надшиваешь', 6),
  singular3rdPerson: Word('надшивает', 6),
  plural1stPerson: Word('надшиваем', 6),
  plural2ndPerson: Word('надшиваете', 6),
  plural3rdPerson: Word('надшивают', 6),
  masculinePast: Word('надшивал', 6),
  femininePast: Word('надшивала', 6),
  neuterPast: Word('надшивало', 6),
  pluralPast: Word('надшивали', 6),
  imperativeInformal: Word('надшивай', 6),
  imperativeFormal: Word('надшивайте', 6),
  imperfect: [],
};

perfectVerbs.set(надшивать.name.text, надшивать);

export { надшивать };