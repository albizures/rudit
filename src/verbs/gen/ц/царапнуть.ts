import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const царапнуть: PerfectVerb = {
  name: Word('царапнуть', 3),
  singular1stPerson: Word('царапну', 3),
  singular2ndPerson: Word('царапнешь', 3),
  singular3rdPerson: Word('царапнет', 3),
  plural1stPerson: Word('царапнем', 3),
  plural2ndPerson: Word('царапнете', 3),
  plural3rdPerson: Word('царапнут', 3),
  masculinePast: Word('царапнул', 3),
  femininePast: Word('царапнула', 3),
  neuterPast: Word('царапнуло', 3),
  pluralPast: Word('царапнули', 3),
  imperativeInformal: Word('царапни', 3),
  imperativeFormal: Word('царапните', 3),
  imperfect: [],
};

perfectVerbs.set(царапнуть.name.text, царапнуть);

export { царапнуть };