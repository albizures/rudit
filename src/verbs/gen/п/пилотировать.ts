import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пилотировать: PerfectVerb = {
  name: Word('пилотировать', 5),
  singular1stPerson: Word('пилотирую', 5),
  singular2ndPerson: Word('пилотируешь', 5),
  singular3rdPerson: Word('пилотирует', 5),
  plural1stPerson: Word('пилотируем', 5),
  plural2ndPerson: Word('пилотируете', 5),
  plural3rdPerson: Word('пилотируют', 5),
  masculinePast: Word('пилотировал', 5),
  femininePast: Word('пилотировала', 5),
  neuterPast: Word('пилотировало', 5),
  pluralPast: Word('пилотировали', 5),
  imperativeInformal: Word('пилотируй', 5),
  imperativeFormal: Word('пилотируйте', 5),
  imperfect: [],
};

perfectVerbs.set(пилотировать.name.text, пилотировать);

export { пилотировать };