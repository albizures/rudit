import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маскировать: PerfectVerb = {
  name: Word('маскировать', 8),
  singular1stPerson: Word('маскирую', 6),
  singular2ndPerson: Word('маскируешь', 6),
  singular3rdPerson: Word('маскирует', 6),
  plural1stPerson: Word('маскируем', 6),
  plural2ndPerson: Word('маскируете', 6),
  plural3rdPerson: Word('маскируют', 6),
  masculinePast: Word('маскировал', 8),
  femininePast: Word('маскировала', 8),
  neuterPast: Word('маскировало', 8),
  pluralPast: Word('маскировали', 8),
  imperativeInformal: Word('маскируй', 6),
  imperativeFormal: Word('маскируйте', 6),
  imperfect: [],
};

perfectVerbs.set(маскировать.name.text, маскировать);

export { маскировать };