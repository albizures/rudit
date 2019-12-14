import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const законспирировать: PerfectVerb = {
  name: Word('законспирировать', 9),
  singular1stPerson: Word('законспирирую', 9),
  singular2ndPerson: Word('законспирируешь', 9),
  singular3rdPerson: Word('законспирирует', 9),
  plural1stPerson: Word('законспирируем', 9),
  plural2ndPerson: Word('законспирируете', 9),
  plural3rdPerson: Word('законспирируют', 9),
  masculinePast: Word('законспирировал', 9),
  femininePast: Word('законспирировала', 9),
  neuterPast: Word('законспирировало', 9),
  pluralPast: Word('законспирировали', 9),
  imperativeInformal: Word('законспирируй', 9),
  imperativeFormal: Word('законспирируйте', 9),
  imperfect: [],
};

perfectVerbs.set(законспирировать.name.text, законспирировать);

export { законспирировать };