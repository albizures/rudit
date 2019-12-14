import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смотать: PerfectVerb = {
  name: Word('смотать', 4),
  singular1stPerson: Word('смотаю', 4),
  singular2ndPerson: Word('смотаешь', 4),
  singular3rdPerson: Word('смотает', 4),
  plural1stPerson: Word('смотаем', 4),
  plural2ndPerson: Word('смотаете', 4),
  plural3rdPerson: Word('смотают', 4),
  masculinePast: Word('смотал', 4),
  femininePast: Word('смотала', 4),
  neuterPast: Word('смотало', 4),
  pluralPast: Word('смотали', 4),
  imperativeInformal: Word('смотай', 4),
  imperativeFormal: Word('смотайте', 4),
  imperfect: [],
};

perfectVerbs.set(смотать.name.text, смотать);

export { смотать };