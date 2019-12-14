import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продохнуть: PerfectVerb = {
  name: Word('продохнуть', 7),
  singular1stPerson: Word('продохну', 7),
  singular2ndPerson: Word('продохнёшь', 7),
  singular3rdPerson: Word('продохнёт', 7),
  plural1stPerson: Word('продохнём', 7),
  plural2ndPerson: Word('продохнёте', 7),
  plural3rdPerson: Word('продохнут', 7),
  masculinePast: Word('продохнул', 7),
  femininePast: Word('продохнула', 7),
  neuterPast: Word('продохнуло', 7),
  pluralPast: Word('продохнули', 7),
  imperativeInformal: Word('продохни', 7),
  imperativeFormal: Word('продохните', 7),
  imperfect: [],
};

perfectVerbs.set(продохнуть.name.text, продохнуть);

export { продохнуть };