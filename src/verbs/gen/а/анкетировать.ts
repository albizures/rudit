import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const анкетировать: PerfectVerb = {
  name: Word('анкетировать', 5),
  singular1stPerson: Word('анкетирую', 5),
  singular2ndPerson: Word('анкетируешь', 5),
  singular3rdPerson: Word('анкетирует', 5),
  plural1stPerson: Word('анкетируем', 5),
  plural2ndPerson: Word('анкетируете', 5),
  plural3rdPerson: Word('анкетируют', 5),
  masculinePast: Word('анкетировал', 5),
  femininePast: Word('анкетировала', 5),
  neuterPast: Word('анкетировало', 5),
  pluralPast: Word('анкетировали', 5),
  imperativeInformal: Word('анкетируй', 5),
  imperativeFormal: Word('анкетируйте', 5),
  imperfect: [],
};

perfectVerbs.set(анкетировать.name.text, анкетировать);

export { анкетировать };