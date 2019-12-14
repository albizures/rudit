import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристегнуть: PerfectVerb = {
  name: Word('пристегнуть', 8),
  singular1stPerson: Word('пристегну', 8),
  singular2ndPerson: Word('пристегнёшь', 8),
  singular3rdPerson: Word('пристегнёт', 8),
  plural1stPerson: Word('пристегнём', 8),
  plural2ndPerson: Word('пристегнёте', 8),
  plural3rdPerson: Word('пристегнут', 8),
  masculinePast: Word('пристегнул', 8),
  femininePast: Word('пристегнула', 8),
  neuterPast: Word('пристегнуло', 8),
  pluralPast: Word('пристегнули', 8),
  imperativeInformal: Word('пристегни', 8),
  imperativeFormal: Word('пристегните', 8),
  imperfect: [],
};

perfectVerbs.set(пристегнуть.name.text, пристегнуть);

export { пристегнуть };