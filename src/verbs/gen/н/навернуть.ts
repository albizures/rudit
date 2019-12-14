import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навернуть: PerfectVerb = {
  name: Word('навернуть', 6),
  singular1stPerson: Word('наверну', 6),
  singular2ndPerson: Word('навернёшь', 6),
  singular3rdPerson: Word('навернёт', 6),
  plural1stPerson: Word('навернём', 6),
  plural2ndPerson: Word('навернёте', 6),
  plural3rdPerson: Word('навернут', 6),
  masculinePast: Word('навернул', 6),
  femininePast: Word('навернула', 6),
  neuterPast: Word('навернуло', 6),
  pluralPast: Word('навернули', 6),
  imperativeInformal: Word('наверни', 6),
  imperativeFormal: Word('наверните', 6),
  imperfect: [],
};

perfectVerbs.set(навернуть.name.text, навернуть);

export { навернуть };