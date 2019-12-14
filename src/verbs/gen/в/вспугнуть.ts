import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспугнуть: PerfectVerb = {
  name: Word('вспугнуть', 6),
  singular1stPerson: Word('вспугну', 6),
  singular2ndPerson: Word('вспугнёшь', 6),
  singular3rdPerson: Word('вспугнёт', 6),
  plural1stPerson: Word('вспугнём', 6),
  plural2ndPerson: Word('вспугнёте', 6),
  plural3rdPerson: Word('вспугнут', 6),
  masculinePast: Word('вспугнул', 6),
  femininePast: Word('вспугнула', 6),
  neuterPast: Word('вспугнуло', 6),
  pluralPast: Word('вспугнули', 6),
  imperativeInformal: Word('вспугни', 6),
  imperativeFormal: Word('вспугните', 6),
  imperfect: [],
};

perfectVerbs.set(вспугнуть.name.text, вспугнуть);

export { вспугнуть };