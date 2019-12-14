import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кликнуть: PerfectVerb = {
  name: Word('кликнуть', 2),
  singular1stPerson: Word('кликну', 2),
  singular2ndPerson: Word('кликнешь', 2),
  singular3rdPerson: Word('кликнет', 2),
  plural1stPerson: Word('кликнем', 2),
  plural2ndPerson: Word('кликнете', 2),
  plural3rdPerson: Word('кликнут', 2),
  masculinePast: Word('кликнул', 2),
  femininePast: Word('кликнула', 2),
  neuterPast: Word('кликнуло', 2),
  pluralPast: Word('кликнули', 2),
  imperativeInformal: Word('кликни', 2),
  imperativeFormal: Word('кликните', 2),
  imperfect: [],
};

perfectVerbs.set(кликнуть.name.text, кликнуть);

export { кликнуть };