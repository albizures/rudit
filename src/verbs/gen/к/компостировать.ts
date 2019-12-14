import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const компостировать: PerfectVerb = {
  name: Word('компостировать', 7),
  singular1stPerson: Word('компостирую', 7),
  singular2ndPerson: Word('компостируешь', 7),
  singular3rdPerson: Word('компостирует', 7),
  plural1stPerson: Word('компостируем', 7),
  plural2ndPerson: Word('компостируете', 7),
  plural3rdPerson: Word('компостируют', 7),
  masculinePast: Word('компостировал', 7),
  femininePast: Word('компостировала', 7),
  neuterPast: Word('компостировало', 7),
  pluralPast: Word('компостировали', 7),
  imperativeInformal: Word('компостируй', 7),
  imperativeFormal: Word('компостируйте', 7),
  imperfect: [],
};

perfectVerbs.set(компостировать.name.text, компостировать);

export { компостировать };