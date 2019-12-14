import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвернуть: PerfectVerb = {
  name: Word('отвернуть', 6),
  singular1stPerson: Word('отверну', 6),
  singular2ndPerson: Word('отвернёшь', 6),
  singular3rdPerson: Word('отвернёт', 6),
  plural1stPerson: Word('отвернём', 6),
  plural2ndPerson: Word('отвернёте', 6),
  plural3rdPerson: Word('отвернут', 6),
  masculinePast: Word('отвернул', 6),
  femininePast: Word('отвернула', 6),
  neuterPast: Word('отвернуло', 6),
  pluralPast: Word('отвернули', 6),
  imperativeInformal: Word('отверни', 6),
  imperativeFormal: Word('отверните', 6),
  imperfect: [],
};

perfectVerbs.set(отвернуть.name.text, отвернуть);

export { отвернуть };