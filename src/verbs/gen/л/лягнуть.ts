import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лягнуть: PerfectVerb = {
  name: Word('лягнуть', 4),
  singular1stPerson: Word('лягну', 4),
  singular2ndPerson: Word('лягнёшь', 4),
  singular3rdPerson: Word('лягнёт', 4),
  plural1stPerson: Word('лягнём', 4),
  plural2ndPerson: Word('лягнёте', 4),
  plural3rdPerson: Word('лягнут', 4),
  masculinePast: Word('лягнул', 4),
  femininePast: Word('лягнула', 4),
  neuterPast: Word('лягнуло', 4),
  pluralPast: Word('лягнули', 4),
  imperativeInformal: Word('лягни', 4),
  imperativeFormal: Word('лягните', 4),
  imperfect: [],
};

perfectVerbs.set(лягнуть.name.text, лягнуть);

export { лягнуть };