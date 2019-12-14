import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молкнуть: PerfectVerb = {
  name: Word('молкнуть', 1),
  singular1stPerson: Word('молкну', 1),
  singular2ndPerson: Word('молкнешь', 1),
  singular3rdPerson: Word('молкнет', 1),
  plural1stPerson: Word('молкнем', 1),
  plural2ndPerson: Word('молкнете', 1),
  plural3rdPerson: Word('молкнут', 1),
  masculinePast: Word('молк//мо'лкнул', 1),
  femininePast: Word('молкла', 1),
  neuterPast: Word('молкло', 1),
  pluralPast: Word('молкли', 1),
  imperativeInformal: Word('молкни', 1),
  imperativeFormal: Word('молкните', 1),
  imperfect: [],
};

perfectVerbs.set(молкнуть.name.text, молкнуть);

export { молкнуть };