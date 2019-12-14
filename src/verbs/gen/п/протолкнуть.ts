import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протолкнуть: PerfectVerb = {
  name: Word('протолкнуть', 8),
  singular1stPerson: Word('протолкну', 8),
  singular2ndPerson: Word('протолкнёшь', 8),
  singular3rdPerson: Word('протолкнёт', 8),
  plural1stPerson: Word('протолкнём', 8),
  plural2ndPerson: Word('протолкнёте', 8),
  plural3rdPerson: Word('протолкнут', 8),
  masculinePast: Word('протолкнул', 8),
  femininePast: Word('протолкнула', 8),
  neuterPast: Word('протолкнуло', 8),
  pluralPast: Word('протолкнули', 8),
  imperativeInformal: Word('протолкни', 8),
  imperativeFormal: Word('протолкните', 8),
  imperfect: [],
};

perfectVerbs.set(протолкнуть.name.text, протолкнуть);

export { протолкнуть };