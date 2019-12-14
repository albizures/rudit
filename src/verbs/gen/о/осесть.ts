import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осесть: PerfectVerb = {
  name: Word('осесть', 2),
  singular1stPerson: Word('осяду', 2),
  singular2ndPerson: Word('осядешь', 2),
  singular3rdPerson: Word('осядет', 2),
  plural1stPerson: Word('осядем', 2),
  plural2ndPerson: Word('осядете', 2),
  plural3rdPerson: Word('осядут', 2),
  masculinePast: Word('осел', 2),
  femininePast: Word('осела', 2),
  neuterPast: Word('осело', 2),
  pluralPast: Word('осели', 2),
  imperativeInformal: Word('осядь', 2),
  imperativeFormal: Word('осядьте', 2),
  imperfect: [],
};

perfectVerbs.set(осесть.name.text, осесть);

export { осесть };