import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const законсервировать: PerfectVerb = {
  name: Word('законсервировать', 9),
  singular1stPerson: Word('законсервирую', 9),
  singular2ndPerson: Word('законсервируешь', 9),
  singular3rdPerson: Word('законсервирует', 9),
  plural1stPerson: Word('законсервируем', 9),
  plural2ndPerson: Word('законсервируете', 9),
  plural3rdPerson: Word('законсервируют', 9),
  masculinePast: Word('законсервировал', 9),
  femininePast: Word('законсервировала', 9),
  neuterPast: Word('законсервировало', 9),
  pluralPast: Word('законсервировали', 9),
  imperativeInformal: Word('законсервируй', 9),
  imperativeFormal: Word('законсервируйте', 9),
  imperfect: [],
};

perfectVerbs.set(законсервировать.name.text, законсервировать);

export { законсервировать };