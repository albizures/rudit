import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спугнуть: PerfectVerb = {
  name: Word('спугнуть', 5),
  singular1stPerson: Word('спугну', 5),
  singular2ndPerson: Word('спугнёшь', 5),
  singular3rdPerson: Word('спугнёт', 5),
  plural1stPerson: Word('спугнём', 5),
  plural2ndPerson: Word('спугнёте', 5),
  plural3rdPerson: Word('спугнут', 5),
  masculinePast: Word('спугнул', 5),
  femininePast: Word('спугнула', 5),
  neuterPast: Word('спугнуло', 5),
  pluralPast: Word('спугнули', 5),
  imperativeInformal: Word('спугни', 5),
  imperativeFormal: Word('спугните', 5),
  imperfect: [],
};

perfectVerbs.set(спугнуть.name.text, спугнуть);

export { спугнуть };