import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const анатомировать: PerfectVerb = {
  name: Word('анатомировать', 6),
  singular1stPerson: Word('анатомирую', 6),
  singular2ndPerson: Word('анатомируешь', 6),
  singular3rdPerson: Word('анатомирует', 6),
  plural1stPerson: Word('анатомируем', 6),
  plural2ndPerson: Word('анатомируете', 6),
  plural3rdPerson: Word('анатомируют', 6),
  masculinePast: Word('анатомировал', 6),
  femininePast: Word('анатомировала', 6),
  neuterPast: Word('анатомировало', 6),
  pluralPast: Word('анатомировали', 6),
  imperativeInformal: Word('анатомируй', 6),
  imperativeFormal: Word('анатомируйте', 6),
  imperfect: [],
};

perfectVerbs.set(анатомировать.name.text, анатомировать);

export { анатомировать };