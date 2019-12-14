import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поблёкнуть: PerfectVerb = {
  name: Word('поблёкнуть', 1),
  singular1stPerson: Word('поблёкну', 1),
  singular2ndPerson: Word('поблёкнешь', 7),
  singular3rdPerson: Word('поблёкнет', 7),
  plural1stPerson: Word('поблёкнем', 7),
  plural2ndPerson: Word('поблёкнете', 7),
  plural3rdPerson: Word('поблёкнут', 1),
  masculinePast: Word('поблёк', 1),
  femininePast: Word('поблёкла', 7),
  neuterPast: Word('поблёкло', 1),
  pluralPast: Word('поблёкли', 7),
  imperativeInformal: Word('поблёкни', 7),
  imperativeFormal: Word('поблёкните', 9),
  imperfect: [],
};

perfectVerbs.set(поблёкнуть.name.text, поблёкнуть);

export { поблёкнуть };