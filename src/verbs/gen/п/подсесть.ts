import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсесть: PerfectVerb = {
  name: Word('подсесть', 4),
  singular1stPerson: Word('подсяду', 4),
  singular2ndPerson: Word('подсядешь', 4),
  singular3rdPerson: Word('подсядет', 4),
  plural1stPerson: Word('подсядем', 4),
  plural2ndPerson: Word('подсядете', 4),
  plural3rdPerson: Word('подсядут', 4),
  masculinePast: Word('подсел', 4),
  femininePast: Word('подсела', 4),
  neuterPast: Word('подсело', 4),
  pluralPast: Word('подсели', 4),
  imperativeInformal: Word('подсядь', 4),
  imperativeFormal: Word('подсядьте', 4),
  imperfect: [],
};

perfectVerbs.set(подсесть.name.text, подсесть);

export { подсесть };