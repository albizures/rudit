import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const калькулировать: PerfectVerb = {
  name: Word('калькулировать', 7),
  singular1stPerson: Word('калькулирую', 7),
  singular2ndPerson: Word('калькулируешь', 7),
  singular3rdPerson: Word('калькулирует', 7),
  plural1stPerson: Word('калькулируем', 7),
  plural2ndPerson: Word('калькулируете', 7),
  plural3rdPerson: Word('калькулируют', 7),
  masculinePast: Word('калькулировал', 7),
  femininePast: Word('калькулировала', 7),
  neuterPast: Word('калькулировало', 7),
  pluralPast: Word('калькулировали', 7),
  imperativeInformal: Word('калькулируй', 7),
  imperativeFormal: Word('калькулируйте', 7),
  imperfect: [],
};

perfectVerbs.set(калькулировать.name.text, калькулировать);

export { калькулировать };