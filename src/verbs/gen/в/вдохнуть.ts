import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдохнуть: PerfectVerb = {
  name: Word('вдохнуть', 5),
  singular1stPerson: Word('вдохну', 5),
  singular2ndPerson: Word('вдохнёшь', 2),
  singular3rdPerson: Word('вдохнёт', 2),
  plural1stPerson: Word('вдохнём', 2),
  plural2ndPerson: Word('вдохнёте', 7),
  plural3rdPerson: Word('вдохнут', 5),
  masculinePast: Word('вдохнул', 5),
  femininePast: Word('вдохнула', 5),
  neuterPast: Word('вдохнуло', 5),
  pluralPast: Word('вдохнули', 5),
  imperativeInformal: Word('вдохни', 5),
  imperativeFormal: Word('вдохните', 5),
  imperfect: [],
};

perfectVerbs.set(вдохнуть.name.text, вдохнуть);

export { вдохнуть };