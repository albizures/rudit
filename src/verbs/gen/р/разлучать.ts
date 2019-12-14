import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлучать: PerfectVerb = {
  name: Word('разлучать', 6),
  singular1stPerson: Word('разлучаю', 6),
  singular2ndPerson: Word('разлучаешь', 6),
  singular3rdPerson: Word('разлучает', 6),
  plural1stPerson: Word('разлучаем', 6),
  plural2ndPerson: Word('разлучаете', 6),
  plural3rdPerson: Word('разлучают', 6),
  masculinePast: Word('разлучал', 6),
  femininePast: Word('разлучала', 6),
  neuterPast: Word('разлучало', 6),
  pluralPast: Word('разлучали', 6),
  imperativeInformal: Word('разлучай', 6),
  imperativeFormal: Word('разлучайте', 6),
  imperfect: [],
};

perfectVerbs.set(разлучать.name.text, разлучать);

export { разлучать };