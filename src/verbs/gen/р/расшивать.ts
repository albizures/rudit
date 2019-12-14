import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшивать: PerfectVerb = {
  name: Word('расшивать', 6),
  singular1stPerson: Word('расшиваю', 6),
  singular2ndPerson: Word('расшиваешь', 6),
  singular3rdPerson: Word('расшивает', 6),
  plural1stPerson: Word('расшиваем', 6),
  plural2ndPerson: Word('расшиваете', 6),
  plural3rdPerson: Word('расшивают', 6),
  masculinePast: Word('расшивал', 6),
  femininePast: Word('расшивала', 6),
  neuterPast: Word('расшивало', 6),
  pluralPast: Word('расшивали', 6),
  imperativeInformal: Word('расшивай', 6),
  imperativeFormal: Word('расшивайте', 6),
  imperfect: [],
};

perfectVerbs.set(расшивать.name.text, расшивать);

export { расшивать };