import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погрешать: PerfectVerb = {
  name: Word('погрешать', 6),
  singular1stPerson: Word('погрешаю', 6),
  singular2ndPerson: Word('погрешаешь', 6),
  singular3rdPerson: Word('погрешает', 6),
  plural1stPerson: Word('погрешаем', 6),
  plural2ndPerson: Word('погрешаете', 6),
  plural3rdPerson: Word('погрешают', 6),
  masculinePast: Word('погрешал', 6),
  femininePast: Word('погрешала', 6),
  neuterPast: Word('погрешало', 6),
  pluralPast: Word('погрешали', 6),
  imperativeInformal: Word('погрешай', 6),
  imperativeFormal: Word('погрешайте', 6),
  imperfect: [],
};

perfectVerbs.set(погрешать.name.text, погрешать);

export { погрешать };