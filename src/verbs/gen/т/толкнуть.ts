import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толкнуть: PerfectVerb = {
  name: Word('толкнуть', 5),
  singular1stPerson: Word('толкну', 5),
  singular2ndPerson: Word('толкнёшь', 5),
  singular3rdPerson: Word('толкнёт', 5),
  plural1stPerson: Word('толкнём', 5),
  plural2ndPerson: Word('толкнёте', 5),
  plural3rdPerson: Word('толкнут', 5),
  masculinePast: Word('толкнул', 5),
  femininePast: Word('толкнула', 5),
  neuterPast: Word('толкнуло', 5),
  pluralPast: Word('толкнули', 5),
  imperativeInformal: Word('толкни', 5),
  imperativeFormal: Word('толкните', 5),
  imperfect: ['толкать'],
};

perfectVerbs.set(толкнуть.name.text, толкнуть);

export { толкнуть };