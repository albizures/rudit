import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const визировать: PerfectVerb = {
  name: Word('визировать', 3),
  singular1stPerson: Word('визирую', 3),
  singular2ndPerson: Word('визируешь', 3),
  singular3rdPerson: Word('визирует', 3),
  plural1stPerson: Word('визируем', 3),
  plural2ndPerson: Word('визируете', 3),
  plural3rdPerson: Word('визируют', 3),
  masculinePast: Word('визировал', 3),
  femininePast: Word('визировала', 3),
  neuterPast: Word('визировало', 3),
  pluralPast: Word('визировали', 3),
  imperativeInformal: Word('визируй', 3),
  imperativeFormal: Word('визируйте', 3),
  imperfect: [],
};

perfectVerbs.set(визировать.name.text, визировать);

export { визировать };