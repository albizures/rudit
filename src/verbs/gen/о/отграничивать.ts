import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отграничивать: PerfectVerb = {
  name: Word('отграничивать', 6),
  singular1stPerson: Word('отграничиваю', 6),
  singular2ndPerson: Word('отграничиваешь', 6),
  singular3rdPerson: Word('отграничивает', 6),
  plural1stPerson: Word('отграничиваем', 6),
  plural2ndPerson: Word('отграничиваете', 6),
  plural3rdPerson: Word('отграничивают', 6),
  masculinePast: Word('отграничивал', 6),
  femininePast: Word('отграничивала', 6),
  neuterPast: Word('отграничивало', 6),
  pluralPast: Word('отграничивали', 6),
  imperativeInformal: Word('отграничивай', 6),
  imperativeFormal: Word('отграничивайте', 6),
  imperfect: [],
};

perfectVerbs.set(отграничивать.name.text, отграничивать);

export { отграничивать };