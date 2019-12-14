import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затихнуть: PerfectVerb = {
  name: Word('затихнуть', 3),
  singular1stPerson: Word('затихну', 3),
  singular2ndPerson: Word('затихнешь', 3),
  singular3rdPerson: Word('затихнет', 3),
  plural1stPerson: Word('затихнем', 3),
  plural2ndPerson: Word('затихнете', 3),
  plural3rdPerson: Word('затихнут', 3),
  masculinePast: Word('затих,зати'хнул', 3),
  femininePast: Word('затихла,зати'хнула', 3),
  neuterPast: Word('затихло,зати'хнуло', 3),
  pluralPast: Word('затихли,зати'хнули', 3),
  imperativeInformal: Word('затихни', 3),
  imperativeFormal: Word('затихните', 3),
  imperfect: ['затихать'],
};

perfectVerbs.set(затихнуть.name.text, затихнуть);

export { затихнуть };