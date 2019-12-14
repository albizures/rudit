import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const артикулировать: PerfectVerb = {
  name: Word('артикулировать', 7),
  singular1stPerson: Word('артикулирую', 7),
  singular2ndPerson: Word('артикулируешь', 7),
  singular3rdPerson: Word('артикулирует', 7),
  plural1stPerson: Word('артикулируем', 7),
  plural2ndPerson: Word('артикулируете', 7),
  plural3rdPerson: Word('артикулируют', 7),
  masculinePast: Word('артикулировал', 7),
  femininePast: Word('артикулировала', 7),
  neuterPast: Word('артикулировало', 7),
  pluralPast: Word('артикулировали', 7),
  imperativeInformal: Word('артикулируй', 7),
  imperativeFormal: Word('артикулируйте', 7),
  imperfect: [],
};

perfectVerbs.set(артикулировать.name.text, артикулировать);

export { артикулировать };