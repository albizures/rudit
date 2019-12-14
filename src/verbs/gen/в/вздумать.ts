import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздумать: PerfectVerb = {
  name: Word('вздумать', 3),
  singular1stPerson: Word('вздумаю', 3),
  singular2ndPerson: Word('вздумаешь', 3),
  singular3rdPerson: Word('вздумает', 3),
  plural1stPerson: Word('вздумаем', 3),
  plural2ndPerson: Word('вздумаете', 3),
  plural3rdPerson: Word('вздумают', 3),
  masculinePast: Word('вздумал', 3),
  femininePast: Word('вздумала', 3),
  neuterPast: Word('вздумало', 3),
  pluralPast: Word('вздумали', 3),
  imperativeInformal: Word('вздумай', 3),
  imperativeFormal: Word('вздумайте', 3),
  imperfect: [],
};

perfectVerbs.set(вздумать.name.text, вздумать);

export { вздумать };