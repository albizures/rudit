import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шантажировать: PerfectVerb = {
  name: Word('шантажировать', 6),
  singular1stPerson: Word('шантажирую', 6),
  singular2ndPerson: Word('шантажируешь', 6),
  singular3rdPerson: Word('шантажирует', 6),
  plural1stPerson: Word('шантажируем', 6),
  plural2ndPerson: Word('шантажируете', 6),
  plural3rdPerson: Word('шантажируют', 6),
  masculinePast: Word('шантажировал', 6),
  femininePast: Word('шантажировала', 6),
  neuterPast: Word('шантажировало', 6),
  pluralPast: Word('шантажировали', 6),
  imperativeInformal: Word('шантажируй', 6),
  imperativeFormal: Word('шантажируйте', 6),
  imperfect: [],
};

perfectVerbs.set(шантажировать.name.text, шантажировать);

export { шантажировать };