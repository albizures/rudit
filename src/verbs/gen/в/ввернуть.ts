import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввернуть: PerfectVerb = {
  name: Word('ввернуть', 5),
  singular1stPerson: Word('вверну', 5),
  singular2ndPerson: Word('ввернёшь', 2),
  singular3rdPerson: Word('ввернёт', 2),
  plural1stPerson: Word('ввернём', 2),
  plural2ndPerson: Word('ввернёте', 2),
  plural3rdPerson: Word('ввернут', 5),
  masculinePast: Word('ввернул', 5),
  femininePast: Word('ввернула', 5),
  neuterPast: Word('ввернуло', 5),
  pluralPast: Word('ввернули', 5),
  imperativeInformal: Word('вверни', 5),
  imperativeFormal: Word('вверните', 5),
  imperfect: [],
};

perfectVerbs.set(ввернуть.name.text, ввернуть);

export { ввернуть };