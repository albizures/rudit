import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухнуть: PerfectVerb = {
  name: Word('ухнуть', 0),
  singular1stPerson: Word('ухну', 0),
  singular2ndPerson: Word('ухнешь', 0),
  singular3rdPerson: Word('ухнет', 0),
  plural1stPerson: Word('ухнем', 0),
  plural2ndPerson: Word('ухнете', 0),
  plural3rdPerson: Word('ухнут', 0),
  masculinePast: Word('ухнул', 0),
  femininePast: Word('ухнула', 0),
  neuterPast: Word('ухнуло', 0),
  pluralPast: Word('ухнули', 0),
  imperativeInformal: Word('ухни', 0),
  imperativeFormal: Word('ухните', 0),
  imperfect: [],
};

perfectVerbs.set(ухнуть.name.text, ухнуть);

export { ухнуть };