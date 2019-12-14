import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарегулировать: PerfectVerb = {
  name: Word('зарегулировать', 7),
  singular1stPerson: Word('зарегулирую', 7),
  singular2ndPerson: Word('зарегулируешь', 7),
  singular3rdPerson: Word('зарегулирует', 7),
  plural1stPerson: Word('зарегулируем', 7),
  plural2ndPerson: Word('зарегулируете', 7),
  plural3rdPerson: Word('зарегулируют', 7),
  masculinePast: Word('зарегулировал', 7),
  femininePast: Word('зарегулировала', 7),
  neuterPast: Word('зарегулировало', 7),
  pluralPast: Word('зарегулировали', 7),
  imperativeInformal: Word('зарегулируй', 7),
  imperativeFormal: Word('зарегулируйте', 7),
  imperfect: [],
};

perfectVerbs.set(зарегулировать.name.text, зарегулировать);

export { зарегулировать };