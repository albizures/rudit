import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдохнуть: PerfectVerb = {
  name: Word('сдохнуть', 2),
  singular1stPerson: Word('сдохну', 2),
  singular2ndPerson: Word('сдохнешь', 2),
  singular3rdPerson: Word('сдохнет', 2),
  plural1stPerson: Word('сдохнем', 2),
  plural2ndPerson: Word('сдохнете', 2),
  plural3rdPerson: Word('сдохнут', 2),
  masculinePast: Word('сдох,сдо'хнул', 2),
  femininePast: Word('сдохла,сдо'хнула', 2),
  neuterPast: Word('сдохло,сдо'хнуло', 2),
  pluralPast: Word('сдохли,сдо'хнули', 2),
  imperativeInformal: Word('сдохни', 2),
  imperativeFormal: Word('сдохните', 2),
  imperfect: [],
};

perfectVerbs.set(сдохнуть.name.text, сдохнуть);

export { сдохнуть };