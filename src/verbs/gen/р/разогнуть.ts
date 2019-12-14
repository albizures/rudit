import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогнуть: PerfectVerb = {
  name: Word('разогнуть', 6),
  singular1stPerson: Word('разогну', 6),
  singular2ndPerson: Word('разогнёшь', 1),
  singular3rdPerson: Word('разогнёт', 1),
  plural1stPerson: Word('разогнём', 1),
  plural2ndPerson: Word('разогнёте', 1),
  plural3rdPerson: Word('разогнут', 6),
  masculinePast: Word('разогнул', 6),
  femininePast: Word('разогнула', 6),
  neuterPast: Word('разогнуло', 6),
  pluralPast: Word('разогнули', 6),
  imperativeInformal: Word('разогни', 6),
  imperativeFormal: Word('разогните', 6),
  imperfect: [],
};

perfectVerbs.set(разогнуть.name.text, разогнуть);

export { разогнуть };