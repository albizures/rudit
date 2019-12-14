import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздремнуть: PerfectVerb = {
  name: Word('вздремнуть', 7),
  singular1stPerson: Word('вздремну', 7),
  singular2ndPerson: Word('вздремнёшь', 7),
  singular3rdPerson: Word('вздремнёт', 7),
  plural1stPerson: Word('вздремнём', 7),
  plural2ndPerson: Word('вздремнёте', 7),
  plural3rdPerson: Word('вздремнут', 7),
  masculinePast: Word('вздремнул', 7),
  femininePast: Word('вздремнула', 7),
  neuterPast: Word('вздремнуло', 7),
  pluralPast: Word('вздремнули', 7),
  imperativeInformal: Word('вздремни', 7),
  imperativeFormal: Word('вздремните', 7),
  imperfect: [],
};

perfectVerbs.set(вздремнуть.name.text, вздремнуть);

export { вздремнуть };