import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пикировать: PerfectVerb = {
  name: Word('пикировать', 3),
  singular1stPerson: Word('пикирую', 3),
  singular2ndPerson: Word('пикируешь', 3),
  singular3rdPerson: Word('пикирует', 3),
  plural1stPerson: Word('пикируем', 3),
  plural2ndPerson: Word('пикируете', 3),
  plural3rdPerson: Word('пикируют', 3),
  masculinePast: Word('пикировал', 3),
  femininePast: Word('пикировала', 3),
  neuterPast: Word('пикировало', 3),
  pluralPast: Word('пикировали', 3),
  imperativeInformal: Word('пикируй', 3),
  imperativeFormal: Word('пикируйте', 3),
  imperfect: [],
};

perfectVerbs.set(пикировать.name.text, пикировать);

export { пикировать };