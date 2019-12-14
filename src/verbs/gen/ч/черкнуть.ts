import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const черкнуть: PerfectVerb = {
  name: Word('черкнуть', 5),
  singular1stPerson: Word('черкну', 5),
  singular2ndPerson: Word('черкнёшь', 1),
  singular3rdPerson: Word('черкнёт', 1),
  plural1stPerson: Word('черкнём', 1),
  plural2ndPerson: Word('черкнёте', 1),
  plural3rdPerson: Word('черкнут', 5),
  masculinePast: Word('черкнул', 5),
  femininePast: Word('черкнула', 5),
  neuterPast: Word('черкнуло', 5),
  pluralPast: Word('черкнули', 5),
  imperativeInformal: Word('черкни', 5),
  imperativeFormal: Word('черкните', 5),
  imperfect: [],
};

perfectVerbs.set(черкнуть.name.text, черкнуть);

export { черкнуть };