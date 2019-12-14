import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const случать: PerfectVerb = {
  name: Word('случать', 4),
  singular1stPerson: Word('случаю', 4),
  singular2ndPerson: Word('случаешь', 4),
  singular3rdPerson: Word('случает', 4),
  plural1stPerson: Word('случаем', 4),
  plural2ndPerson: Word('случаете', 4),
  plural3rdPerson: Word('случают', 4),
  masculinePast: Word('случал', 4),
  femininePast: Word('случала', 4),
  neuterPast: Word('случало', 4),
  pluralPast: Word('случали', 4),
  imperativeInformal: Word('случай', 4),
  imperativeFormal: Word('случайте', 4),
  imperfect: [],
};

perfectVerbs.set(случать.name.text, случать);

export { случать };