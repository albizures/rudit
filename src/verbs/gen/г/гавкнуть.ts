import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гавкнуть: PerfectVerb = {
  name: Word('гавкнуть', 1),
  singular1stPerson: Word('гавкну', 1),
  singular2ndPerson: Word('гавкнешь', 1),
  singular3rdPerson: Word('гавкнет', 1),
  plural1stPerson: Word('гавкнем', 1),
  plural2ndPerson: Word('гавкнете', 1),
  plural3rdPerson: Word('гавкнут', 1),
  masculinePast: Word('гавкнул', 1),
  femininePast: Word('гавкнула', 1),
  neuterPast: Word('гавкнуло', 1),
  pluralPast: Word('гавкнули', 1),
  imperativeInformal: Word('гавкни', 1),
  imperativeFormal: Word('гавкните', 1),
  imperfect: [],
};

perfectVerbs.set(гавкнуть.name.text, гавкнуть);

export { гавкнуть };