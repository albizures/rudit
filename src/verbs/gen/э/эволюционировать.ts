import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const эволюционировать: PerfectVerb = {
  name: Word('эволюционировать', 9),
  singular1stPerson: Word('эволюционирую', 9),
  singular2ndPerson: Word('эволюционируешь', 9),
  singular3rdPerson: Word('эволюционирует', 9),
  plural1stPerson: Word('эволюционируем', 9),
  plural2ndPerson: Word('эволюционируете', 9),
  plural3rdPerson: Word('эволюционируют', 9),
  masculinePast: Word('эволюционировал', 9),
  femininePast: Word('эволюционировала', 9),
  neuterPast: Word('эволюционировало', 9),
  pluralPast: Word('эволюционировали', 9),
  imperativeInformal: Word('эволюционируй', 9),
  imperativeFormal: Word('эволюционируйте', 9),
  imperfect: [],
};

perfectVerbs.set(эволюционировать.name.text, эволюционировать);

export { эволюционировать };