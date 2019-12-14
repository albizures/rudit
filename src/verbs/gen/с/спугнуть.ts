import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спугнуть: PerfectVerb = {
  name: Word('спугнуть', 5),
  singular1stPerson: Word('спугну', 5),
  singular2ndPerson: Word('спугнёшь', 2),
  singular3rdPerson: Word('спугнёт', 2),
  plural1stPerson: Word('спугнём', 2),
  plural2ndPerson: Word('спугнёте', 7),
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