import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сигануть: PerfectVerb = {
  name: Word('сигануть', 5),
  singular1stPerson: Word('сигану', 5),
  singular2ndPerson: Word('сиганёшь', 5),
  singular3rdPerson: Word('сиганёт', 5),
  plural1stPerson: Word('сиганём', 5),
  plural2ndPerson: Word('сиганёте', 5),
  plural3rdPerson: Word('сиганут', 5),
  masculinePast: Word('сиганул', 5),
  femininePast: Word('сиганула', 5),
  neuterPast: Word('сигануло', 5),
  pluralPast: Word('сиганули', 5),
  imperativeInformal: Word('сигани', 5),
  imperativeFormal: Word('сиганите', 5),
  imperfect: [],
};

perfectVerbs.set(сигануть.name.text, сигануть);

export { сигануть };