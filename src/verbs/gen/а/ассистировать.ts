import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ассистировать: PerfectVerb = {
  name: Word('ассистировать', 6),
  singular1stPerson: Word('ассистирую', 6),
  singular2ndPerson: Word('ассистируешь', 6),
  singular3rdPerson: Word('ассистирует', 6),
  plural1stPerson: Word('ассистируем', 6),
  plural2ndPerson: Word('ассистируете', 6),
  plural3rdPerson: Word('ассистируют', 6),
  masculinePast: Word('ассистировал', 6),
  femininePast: Word('ассистировала', 6),
  neuterPast: Word('ассистировало', 6),
  pluralPast: Word('ассистировали', 6),
  imperativeInformal: Word('ассистируй', 6),
  imperativeFormal: Word('ассистируйте', 6),
  imperfect: [],
};

perfectVerbs.set(ассистировать.name.text, ассистировать);

export { ассистировать };