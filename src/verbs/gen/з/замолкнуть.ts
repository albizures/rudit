import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замолкнуть: PerfectVerb = {
  name: Word('замолкнуть', 3),
  singular1stPerson: Word('замолкну', 3),
  singular2ndPerson: Word('замолкнешь', 3),
  singular3rdPerson: Word('замолкнет', 3),
  plural1stPerson: Word('замолкнем', 3),
  plural2ndPerson: Word('замолкнете', 3),
  plural3rdPerson: Word('замолкнут', 3),
  masculinePast: Word('замолк', 3),
  femininePast: Word('замолкла', 3),
  neuterPast: Word('замолкло', 3),
  pluralPast: Word('замолкли', 3),
  imperativeInformal: Word('замолкни', 3),
  imperativeFormal: Word('замолкните', 3),
  imperfect: [],
};

perfectVerbs.set(замолкнуть.name.text, замолкнуть);

export { замолкнуть };