import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гармонировать: PerfectVerb = {
  name: Word('гармонировать', 6),
  singular1stPerson: Word('гармонирую', 6),
  singular2ndPerson: Word('гармонируешь', 6),
  singular3rdPerson: Word('гармонирует', 6),
  plural1stPerson: Word('гармонируем', 6),
  plural2ndPerson: Word('гармонируете', 6),
  plural3rdPerson: Word('гармонируют', 6),
  masculinePast: Word('гармонировал', 6),
  femininePast: Word('гармонировала', 6),
  neuterPast: Word('гармонировало', 6),
  pluralPast: Word('гармонировали', 6),
  imperativeInformal: Word('гармонируй', 6),
  imperativeFormal: Word('гармонируйте', 6),
  imperfect: [],
};

perfectVerbs.set(гармонировать.name.text, гармонировать);

export { гармонировать };