import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постулировать: PerfectVerb = {
  name: Word('постулировать', 6),
  singular1stPerson: Word('постулирую', 6),
  singular2ndPerson: Word('постулируешь', 6),
  singular3rdPerson: Word('постулирует', 6),
  plural1stPerson: Word('постулируем', 6),
  plural2ndPerson: Word('постулируете', 6),
  plural3rdPerson: Word('постулируют', 6),
  masculinePast: Word('постулировал', 6),
  femininePast: Word('постулировала', 6),
  neuterPast: Word('постулировало', 6),
  pluralPast: Word('постулировали', 6),
  imperativeInformal: Word('постулируй', 6),
  imperativeFormal: Word('постулируйте', 6),
  imperfect: [],
};

perfectVerbs.set(постулировать.name.text, постулировать);

export { постулировать };