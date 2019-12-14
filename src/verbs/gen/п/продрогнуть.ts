import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продрогнуть: PerfectVerb = {
  name: Word('продрогнуть', 5),
  singular1stPerson: Word('продрогну', 5),
  singular2ndPerson: Word('продрогнешь', 5),
  singular3rdPerson: Word('продрогнет', 5),
  plural1stPerson: Word('продрогнем', 5),
  plural2ndPerson: Word('продрогнете', 5),
  plural3rdPerson: Word('продрогнут', 5),
  masculinePast: Word('продрог', 5),
  femininePast: Word('продрогла', 5),
  neuterPast: Word('продрогло', 5),
  pluralPast: Word('продрогли', 5),
  imperativeInformal: Word('продрогни', 5),
  imperativeFormal: Word('продрогните', 5),
  imperfect: [],
};

perfectVerbs.set(продрогнуть.name.text, продрогнуть);

export { продрогнуть };