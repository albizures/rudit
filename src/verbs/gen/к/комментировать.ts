import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const комментировать: PerfectVerb = {
  name: Word('комментировать', 7),
  singular1stPerson: Word('комментирую', 7),
  singular2ndPerson: Word('комментируешь', 7),
  singular3rdPerson: Word('комментирует', 7),
  plural1stPerson: Word('комментируем', 7),
  plural2ndPerson: Word('комментируете', 7),
  plural3rdPerson: Word('комментируют', 7),
  masculinePast: Word('комментировал', 7),
  femininePast: Word('комментировала', 7),
  neuterPast: Word('комментировало', 7),
  pluralPast: Word('комментировали', 7),
  imperativeInformal: Word('комментируй', 7),
  imperativeFormal: Word('комментируйте', 7),
  imperfect: [],
};

perfectVerbs.set(комментировать.name.text, комментировать);

export { комментировать };