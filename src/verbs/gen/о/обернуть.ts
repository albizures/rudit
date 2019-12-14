import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обернуть: PerfectVerb = {
  name: Word('обернуть', 5),
  singular1stPerson: Word('оберну', 5),
  singular2ndPerson: Word('обернёшь', 2),
  singular3rdPerson: Word('обернёт', 2),
  plural1stPerson: Word('обернём', 2),
  plural2ndPerson: Word('обернёте', 2),
  plural3rdPerson: Word('обернут', 5),
  masculinePast: Word('обернул', 5),
  femininePast: Word('обернула', 5),
  neuterPast: Word('обернуло', 5),
  pluralPast: Word('обернули', 5),
  imperativeInformal: Word('оберни', 5),
  imperativeFormal: Word('оберните', 5),
  imperfect: [],
};

perfectVerbs.set(обернуть.name.text, обернуть);

export { обернуть };