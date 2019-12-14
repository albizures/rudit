import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const капитулировать: PerfectVerb = {
  name: Word('капитулировать', 7),
  singular1stPerson: Word('капитулирую', 7),
  singular2ndPerson: Word('капитулируешь', 7),
  singular3rdPerson: Word('капитулирует', 7),
  plural1stPerson: Word('капитулируем', 7),
  plural2ndPerson: Word('капитулируете', 7),
  plural3rdPerson: Word('капитулируют', 7),
  masculinePast: Word('капитулировал', 7),
  femininePast: Word('капитулировала', 7),
  neuterPast: Word('капитулировало', 7),
  pluralPast: Word('капитулировали', 7),
  imperativeInformal: Word('капитулируй', 7),
  imperativeFormal: Word('капитулируйте', 7),
  imperfect: [],
};

perfectVerbs.set(капитулировать.name.text, капитулировать);

export { капитулировать };