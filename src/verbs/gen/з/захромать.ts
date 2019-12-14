import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захромать: PerfectVerb = {
  name: Word('захромать', 6),
  singular1stPerson: Word('захромаю', 6),
  singular2ndPerson: Word('захромаешь', 6),
  singular3rdPerson: Word('захромает', 6),
  plural1stPerson: Word('захромаем', 6),
  plural2ndPerson: Word('захромаете', 6),
  plural3rdPerson: Word('захромают', 6),
  masculinePast: Word('захромал', 6),
  femininePast: Word('захромала', 6),
  neuterPast: Word('захромало', 6),
  pluralPast: Word('захромали', 6),
  imperativeInformal: Word('захромай', 6),
  imperativeFormal: Word('захромайте', 6),
  imperfect: [],
};

perfectVerbs.set(захромать.name.text, захромать);

export { захромать };