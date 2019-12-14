import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const будировать: PerfectVerb = {
  name: Word('будировать', 3),
  singular1stPerson: Word('будирую', 3),
  singular2ndPerson: Word('будируешь', 3),
  singular3rdPerson: Word('будирует', 3),
  plural1stPerson: Word('будируем', 3),
  plural2ndPerson: Word('будируете', 3),
  plural3rdPerson: Word('будируют', 3),
  masculinePast: Word('будировал', 3),
  femininePast: Word('будировала', 3),
  neuterPast: Word('будировало', 3),
  pluralPast: Word('будировали', 3),
  imperativeInformal: Word('будируй', 3),
  imperativeFormal: Word('будируйте', 3),
  imperfect: [],
};

perfectVerbs.set(будировать.name.text, будировать);

export { будировать };