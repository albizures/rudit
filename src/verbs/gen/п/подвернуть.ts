import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвернуть: PerfectVerb = {
  name: Word('подвернуть', 7),
  singular1stPerson: Word('подверну', 7),
  singular2ndPerson: Word('подвернёшь', 7),
  singular3rdPerson: Word('подвернёт', 7),
  plural1stPerson: Word('подвернём', 7),
  plural2ndPerson: Word('подвернёте', 7),
  plural3rdPerson: Word('подвернут', 7),
  masculinePast: Word('подвернул', 7),
  femininePast: Word('подвернула', 7),
  neuterPast: Word('подвернуло', 7),
  pluralPast: Word('подвернули', 7),
  imperativeInformal: Word('подверни', 7),
  imperativeFormal: Word('подверните', 7),
  imperfect: [],
};

perfectVerbs.set(подвернуть.name.text, подвернуть);

export { подвернуть };