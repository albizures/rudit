import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const регулировать: PerfectVerb = {
  name: Word('регулировать', 5),
  singular1stPerson: Word('регулирую', 5),
  singular2ndPerson: Word('регулируешь', 5),
  singular3rdPerson: Word('регулирует', 5),
  plural1stPerson: Word('регулируем', 5),
  plural2ndPerson: Word('регулируете', 5),
  plural3rdPerson: Word('регулируют', 5),
  masculinePast: Word('регулировал', 5),
  femininePast: Word('регулировала', 5),
  neuterPast: Word('регулировало', 5),
  pluralPast: Word('регулировали', 5),
  imperativeInformal: Word('регулируй', 5),
  imperativeFormal: Word('регулируйте', 5),
  imperfect: ['отрегулировать'],
};

perfectVerbs.set(регулировать.name.text, регулировать);

export { регулировать };