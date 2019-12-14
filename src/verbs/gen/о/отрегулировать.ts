import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрегулировать: PerfectVerb = {
  name: Word('отрегулировать', 7),
  singular1stPerson: Word('отрегулирую', 7),
  singular2ndPerson: Word('отрегулируешь', 7),
  singular3rdPerson: Word('отрегулирует', 7),
  plural1stPerson: Word('отрегулируем', 7),
  plural2ndPerson: Word('отрегулируете', 7),
  plural3rdPerson: Word('отрегулируют', 7),
  masculinePast: Word('отрегулировал', 7),
  femininePast: Word('отрегулировала', 7),
  neuterPast: Word('отрегулировало', 7),
  pluralPast: Word('отрегулировали', 7),
  imperativeInformal: Word('отрегулируй', 7),
  imperativeFormal: Word('отрегулируйте', 7),
  imperfect: ['регулировать'],
};

perfectVerbs.set(отрегулировать.name.text, отрегулировать);

export { отрегулировать };