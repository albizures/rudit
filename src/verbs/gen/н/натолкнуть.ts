import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натолкнуть: PerfectVerb = {
  name: Word('натолкнуть', 7),
  singular1stPerson: Word('натолкну', 7),
  singular2ndPerson: Word('натолкнёшь', 7),
  singular3rdPerson: Word('натолкнёт', 7),
  plural1stPerson: Word('натолкнём', 7),
  plural2ndPerson: Word('натолкнёте', 7),
  plural3rdPerson: Word('натолкнут', 7),
  masculinePast: Word('натолкнул', 7),
  femininePast: Word('натолкнула', 7),
  neuterPast: Word('натолкнуло', 7),
  pluralPast: Word('натолкнули', 7),
  imperativeInformal: Word('натолкни', 7),
  imperativeFormal: Word('натолкните', 7),
  imperfect: [],
};

perfectVerbs.set(натолкнуть.name.text, натолкнуть);

export { натолкнуть };