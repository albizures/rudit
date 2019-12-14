import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сшивать: PerfectVerb = {
  name: Word('сшивать', 4),
  singular1stPerson: Word('сшиваю', 4),
  singular2ndPerson: Word('сшиваешь', 4),
  singular3rdPerson: Word('сшивает', 4),
  plural1stPerson: Word('сшиваем', 4),
  plural2ndPerson: Word('сшиваете', 4),
  plural3rdPerson: Word('сшивают', 4),
  masculinePast: Word('сшивал', 4),
  femininePast: Word('сшивала', 4),
  neuterPast: Word('сшивало', 4),
  pluralPast: Word('сшивали', 4),
  imperativeInformal: Word('сшивай', 4),
  imperativeFormal: Word('сшивайте', 4),
  imperfect: [],
};

perfectVerbs.set(сшивать.name.text, сшивать);

export { сшивать };