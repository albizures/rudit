import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провернуть: PerfectVerb = {
  name: Word('провернуть', 7),
  singular1stPerson: Word('проверну', 7),
  singular2ndPerson: Word('провернёшь', 4),
  singular3rdPerson: Word('провернёт', 4),
  plural1stPerson: Word('провернём', 4),
  plural2ndPerson: Word('провернёте', 4),
  plural3rdPerson: Word('провернут', 7),
  masculinePast: Word('провернул', 7),
  femininePast: Word('провернула', 7),
  neuterPast: Word('провернуло', 7),
  pluralPast: Word('провернули', 7),
  imperativeInformal: Word('проверни', 7),
  imperativeFormal: Word('проверните', 7),
  imperfect: [],
};

perfectVerbs.set(провернуть.name.text, провернуть);

export { провернуть };