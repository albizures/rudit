import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const модулировать: PerfectVerb = {
  name: Word('модулировать', 5),
  singular1stPerson: Word('модулирую', 5),
  singular2ndPerson: Word('модулируешь', 5),
  singular3rdPerson: Word('модулирует', 5),
  plural1stPerson: Word('модулируем', 5),
  plural2ndPerson: Word('модулируете', 5),
  plural3rdPerson: Word('модулируют', 5),
  masculinePast: Word('модулировал', 5),
  femininePast: Word('модулировала', 5),
  neuterPast: Word('модулировало', 5),
  pluralPast: Word('модулировали', 5),
  imperativeInformal: Word('модулируй', 5),
  imperativeFormal: Word('модулируйте', 5),
  imperfect: [],
};

perfectVerbs.set(модулировать.name.text, модулировать);

export { модулировать };