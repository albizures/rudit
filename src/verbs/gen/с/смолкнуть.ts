import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смолкнуть: PerfectVerb = {
  name: Word('смолкнуть', 2),
  singular1stPerson: Word('смолкну', 2),
  singular2ndPerson: Word('смолкнешь', 2),
  singular3rdPerson: Word('смолкнет', 2),
  plural1stPerson: Word('смолкнем', 2),
  plural2ndPerson: Word('смолкнете', 2),
  plural3rdPerson: Word('смолкнут', 2),
  masculinePast: Word('смолк', 2),
  femininePast: Word('смолкла', 2),
  neuterPast: Word('смолкло', 2),
  pluralPast: Word('смолкли', 2),
  imperativeInformal: Word('смолкни', 2),
  imperativeFormal: Word('смолкните', 2),
  imperfect: [],
};

perfectVerbs.set(смолкнуть.name.text, смолкнуть);

export { смолкнуть };