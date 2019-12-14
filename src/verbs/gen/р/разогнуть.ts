import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разогнуть: PerfectVerb = {
  name: Word('разогнуть', 6),
  singular1stPerson: Word('разогну', 6),
  singular2ndPerson: Word('разогнёшь', 6),
  singular3rdPerson: Word('разогнёт', 6),
  plural1stPerson: Word('разогнём', 6),
  plural2ndPerson: Word('разогнёте', 6),
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