import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чревоугодничать: PerfectVerb = {
  name: Word('чревоугодничать', 7),
  singular1stPerson: Word('чревоугодничаю', 7),
  singular2ndPerson: Word('чревоугодничаешь', 7),
  singular3rdPerson: Word('чревоугодничает', 7),
  plural1stPerson: Word('чревоугодничаем', 7),
  plural2ndPerson: Word('чревоугодничаете', 7),
  plural3rdPerson: Word('чревоугодничают', 7),
  masculinePast: Word('чревоугодничал', 7),
  femininePast: Word('чревоугодничала', 7),
  neuterPast: Word('чревоугодничало', 7),
  pluralPast: Word('чревоугодничали', 7),
  imperativeInformal: Word('чревоугодничай', 7),
  imperativeFormal: Word('чревоугодничайте', 7),
  imperfect: [],
};

perfectVerbs.set(чревоугодничать.name.text, чревоугодничать);

export { чревоугодничать };