import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оппонировать: PerfectVerb = {
  name: Word('оппонировать', 5),
  singular1stPerson: Word('оппонирую', 5),
  singular2ndPerson: Word('оппонируешь', 5),
  singular3rdPerson: Word('оппонирует', 5),
  plural1stPerson: Word('оппонируем', 5),
  plural2ndPerson: Word('оппонируете', 5),
  plural3rdPerson: Word('оппонируют', 5),
  masculinePast: Word('оппонировал', 5),
  femininePast: Word('оппонировала', 5),
  neuterPast: Word('оппонировало', 5),
  pluralPast: Word('оппонировали', 5),
  imperativeInformal: Word('оппонируй', 5),
  imperativeFormal: Word('оппонируйте', 5),
  imperfect: [],
};

perfectVerbs.set(оппонировать.name.text, оппонировать);

export { оппонировать };