import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брехнуть: PerfectVerb = {
  name: Word('брехнуть', 5),
  singular1stPerson: Word('брехну', 5),
  singular2ndPerson: Word('брехнёшь', 5),
  singular3rdPerson: Word('брехнёт', 5),
  plural1stPerson: Word('брехнём', 5),
  plural2ndPerson: Word('брехнёте', 5),
  plural3rdPerson: Word('брехнут', 5),
  masculinePast: Word('брехнул', 5),
  femininePast: Word('брехнула', 5),
  neuterPast: Word('брехнуло', 5),
  pluralPast: Word('брехнули', 5),
  imperativeInformal: Word('брехни', 5),
  imperativeFormal: Word('брехните', 5),
  imperfect: [],
};

perfectVerbs.set(брехнуть.name.text, брехнуть);

export { брехнуть };