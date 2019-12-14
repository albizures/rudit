import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пугнуть: PerfectVerb = {
  name: Word('пугнуть', 4),
  singular1stPerson: Word('пугну', 4),
  singular2ndPerson: Word('пугнёшь', 1),
  singular3rdPerson: Word('пугнёт', 1),
  plural1stPerson: Word('пугнём', 1),
  plural2ndPerson: Word('пугнёте', 6),
  plural3rdPerson: Word('пугнут', 4),
  masculinePast: Word('пугнул', 4),
  femininePast: Word('пугнула', 4),
  neuterPast: Word('пугнуло', 4),
  pluralPast: Word('пугнули', 4),
  imperativeInformal: Word('пугни', 4),
  imperativeFormal: Word('пугните', 4),
  imperfect: [],
};

perfectVerbs.set(пугнуть.name.text, пугнуть);

export { пугнуть };