import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развернуть: PerfectVerb = {
  name: Word('развернуть', 7),
  singular1stPerson: Word('разверну', 7),
  singular2ndPerson: Word('развернёшь', 1),
  singular3rdPerson: Word('развернёт', 1),
  plural1stPerson: Word('развернём', 1),
  plural2ndPerson: Word('развернёте', 1),
  plural3rdPerson: Word('развернут', 7),
  masculinePast: Word('развернул', 7),
  femininePast: Word('развернула', 7),
  neuterPast: Word('развернуло', 7),
  pluralPast: Word('развернули', 7),
  imperativeInformal: Word('разверни', 7),
  imperativeFormal: Word('разверните', 7),
  imperfect: [],
};

perfectVerbs.set(развернуть.name.text, развернуть);

export { развернуть };