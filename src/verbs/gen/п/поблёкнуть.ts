import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поблёкнуть: PerfectVerb = {
  name: Word('поблёкнуть', 4),
  singular1stPerson: Word('поблёкну', 4),
  singular2ndPerson: Word('поблёкнешь', 4),
  singular3rdPerson: Word('поблёкнет', 4),
  plural1stPerson: Word('поблёкнем', 4),
  plural2ndPerson: Word('поблёкнете', 4),
  plural3rdPerson: Word('поблёкнут', 4),
  masculinePast: Word('поблёк', 4),
  femininePast: Word('поблёкла', 4),
  neuterPast: Word('поблёкло', 4),
  pluralPast: Word('поблёкли', 4),
  imperativeInformal: Word('поблёкни', 4),
  imperativeFormal: Word('поблёкните', 4),
  imperfect: [],
};

perfectVerbs.set(поблёкнуть.name.text, поблёкнуть);

export { поблёкнуть };