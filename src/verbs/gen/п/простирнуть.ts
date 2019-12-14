import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простирнуть: PerfectVerb = {
  name: Word('простирнуть', 8),
  singular1stPerson: Word('простирну', 8),
  singular2ndPerson: Word('простирнёшь', 5),
  singular3rdPerson: Word('простирнёт', 5),
  plural1stPerson: Word('простирнём', 5),
  plural2ndPerson: Word('простирнёте', 10),
  plural3rdPerson: Word('простирнут', 8),
  masculinePast: Word('простирнул', 8),
  femininePast: Word('простирнула', 8),
  neuterPast: Word('простирнуло', 8),
  pluralPast: Word('простирнули', 8),
  imperativeInformal: Word('простирни', 8),
  imperativeFormal: Word('простирните', 8),
  imperfect: [],
};

perfectVerbs.set(простирнуть.name.text, простирнуть);

export { простирнуть };