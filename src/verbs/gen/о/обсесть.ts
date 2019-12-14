import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсесть: PerfectVerb = {
  name: Word('обсесть', 3),
  singular1stPerson: Word('обсяду', 3),
  singular2ndPerson: Word('обсядешь', 3),
  singular3rdPerson: Word('обсядет', 3),
  plural1stPerson: Word('обсядем', 3),
  plural2ndPerson: Word('обсядете', 3),
  plural3rdPerson: Word('обсядут', 3),
  masculinePast: Word('обсел', 3),
  femininePast: Word('обсела', 3),
  neuterPast: Word('обсело', 3),
  pluralPast: Word('обсели', 3),
  imperativeInformal: Word('обсядь', 3),
  imperativeFormal: Word('обсядьте', 3),
  imperfect: [],
};

perfectVerbs.set(обсесть.name.text, обсесть);

export { обсесть };