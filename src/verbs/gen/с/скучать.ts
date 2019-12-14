import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скучать: PerfectVerb = {
  name: Word('скучать', 4),
  singular1stPerson: Word('скучаю', 4),
  singular2ndPerson: Word('скучаешь', 4),
  singular3rdPerson: Word('скучает', 4),
  plural1stPerson: Word('скучаем', 4),
  plural2ndPerson: Word('скучаете', 4),
  plural3rdPerson: Word('скучают', 4),
  masculinePast: Word('скучал', 4),
  femininePast: Word('скучала', 4),
  neuterPast: Word('скучало', 4),
  pluralPast: Word('скучали', 4),
  imperativeInformal: Word('скучай', 4),
  imperativeFormal: Word('скучайте', 4),
  imperfect: [],
};

perfectVerbs.set(скучать.name.text, скучать);

export { скучать };