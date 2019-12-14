import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const импонировать: PerfectVerb = {
  name: Word('импонировать', 5),
  singular1stPerson: Word('импонирую', 5),
  singular2ndPerson: Word('импонируешь', 5),
  singular3rdPerson: Word('импонирует', 5),
  plural1stPerson: Word('импонируем', 5),
  plural2ndPerson: Word('импонируете', 5),
  plural3rdPerson: Word('импонируют', 5),
  masculinePast: Word('импонировал', 5),
  femininePast: Word('импонировала', 5),
  neuterPast: Word('импонировало', 5),
  pluralPast: Word('импонировали', 5),
  imperativeInformal: Word('импонируй', 5),
  imperativeFormal: Word('импонируйте', 5),
  imperfect: [],
};

perfectVerbs.set(импонировать.name.text, импонировать);

export { импонировать };