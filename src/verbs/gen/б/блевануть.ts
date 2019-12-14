import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блевануть: PerfectVerb = {
  name: Word('блевануть', 6),
  singular1stPerson: Word('блевану', 6),
  singular2ndPerson: Word('блеванёшь', 6),
  singular3rdPerson: Word('блеванёт', 6),
  plural1stPerson: Word('блеванём', 6),
  plural2ndPerson: Word('блеванёте', 6),
  plural3rdPerson: Word('блеванут', 6),
  masculinePast: Word('блеванул', 6),
  femininePast: Word('блеванула', 6),
  neuterPast: Word('блевануло', 6),
  pluralPast: Word('блеванули', 6),
  imperativeInformal: Word('блевани', 6),
  imperativeFormal: Word('блеваните', 6),
  imperfect: ['блевать'],
};

perfectVerbs.set(блевануть.name.text, блевануть);

export { блевануть };