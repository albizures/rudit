import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пикетировать: PerfectVerb = {
  name: Word('пикетировать', 5),
  singular1stPerson: Word('пикетирую', 5),
  singular2ndPerson: Word('пикетируешь', 5),
  singular3rdPerson: Word('пикетирует', 5),
  plural1stPerson: Word('пикетируем', 5),
  plural2ndPerson: Word('пикетируете', 5),
  plural3rdPerson: Word('пикетируют', 5),
  masculinePast: Word('пикетировал', 5),
  femininePast: Word('пикетировала', 5),
  neuterPast: Word('пикетировало', 5),
  pluralPast: Word('пикетировали', 5),
  imperativeInformal: Word('пикетируй', 5),
  imperativeFormal: Word('пикетируйте', 5),
  imperfect: [],
};

perfectVerbs.set(пикетировать.name.text, пикетировать);

export { пикетировать };