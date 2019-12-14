import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const манипулировать: PerfectVerb = {
  name: Word('манипулировать', 7),
  singular1stPerson: Word('манипулирую', 7),
  singular2ndPerson: Word('манипулируешь', 7),
  singular3rdPerson: Word('манипулирует', 7),
  plural1stPerson: Word('манипулируем', 7),
  plural2ndPerson: Word('манипулируете', 7),
  plural3rdPerson: Word('манипулируют', 7),
  masculinePast: Word('манипулировал', 7),
  femininePast: Word('манипулировала', 7),
  neuterPast: Word('манипулировало', 7),
  pluralPast: Word('манипулировали', 7),
  imperativeInformal: Word('манипулируй', 7),
  imperativeFormal: Word('манипулируйте', 7),
  imperfect: [],
};

perfectVerbs.set(манипулировать.name.text, манипулировать);

export { манипулировать };