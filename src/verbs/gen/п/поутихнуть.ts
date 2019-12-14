import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поутихнуть: PerfectVerb = {
  name: Word('поутихнуть', 4),
  singular1stPerson: Word('поутихну', 4),
  singular2ndPerson: Word('поутихнешь', 4),
  singular3rdPerson: Word('поутихнет', 4),
  plural1stPerson: Word('поутихнем', 4),
  plural2ndPerson: Word('поутихнете', 4),
  plural3rdPerson: Word('поутихнут', 4),
  masculinePast: Word('поутих', 4),
  femininePast: Word('поутихла', 4),
  neuterPast: Word('поутихло', 4),
  pluralPast: Word('поутихли', 4),
  imperativeInformal: Word('поутихни', 4),
  imperativeFormal: Word('поутихните', 4),
  imperfect: [],
};

perfectVerbs.set(поутихнуть.name.text, поутихнуть);

export { поутихнуть };