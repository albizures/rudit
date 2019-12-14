import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сесть: PerfectVerb = {
  name: Word('сесть', 1),
  singular1stPerson: Word('сяду', 1),
  singular2ndPerson: Word('сядешь', 1),
  singular3rdPerson: Word('сядет', 1),
  plural1stPerson: Word('сядем', 1),
  plural2ndPerson: Word('сядете', 1),
  plural3rdPerson: Word('сядут', 1),
  masculinePast: Word('сел', 1),
  femininePast: Word('села', 1),
  neuterPast: Word('село', 1),
  pluralPast: Word('сели', 1),
  imperativeInformal: Word('сядь', 1),
  imperativeFormal: Word('сядьте', 1),
  imperfect: ['садиться'],
};

perfectVerbs.set(сесть.name.text, сесть);

export { сесть };