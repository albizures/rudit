import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рвануть: PerfectVerb = {
  name: Word('рвануть', 4),
  singular1stPerson: Word('рвану', 4),
  singular2ndPerson: Word('рванёшь', 2),
  singular3rdPerson: Word('рванёт', 2),
  plural1stPerson: Word('рванём', 2),
  plural2ndPerson: Word('рванёте', 2),
  plural3rdPerson: Word('рванут', 4),
  masculinePast: Word('рванул', 4),
  femininePast: Word('рванула', 4),
  neuterPast: Word('рвануло', 4),
  pluralPast: Word('рванули', 4),
  imperativeInformal: Word('рвани', 4),
  imperativeFormal: Word('рваните', 4),
  imperfect: [],
};

perfectVerbs.set(рвануть.name.text, рвануть);

export { рвануть };