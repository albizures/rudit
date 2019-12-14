import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приутихнуть: PerfectVerb = {
  name: Word('приутихнуть', 5),
  singular1stPerson: Word('приутихну', 5),
  singular2ndPerson: Word('приутихнешь', 5),
  singular3rdPerson: Word('приутихнет', 5),
  plural1stPerson: Word('приутихнем', 5),
  plural2ndPerson: Word('приутихнете', 5),
  plural3rdPerson: Word('приутихнут', 5),
  masculinePast: Word('приутих', 5),
  femininePast: Word('приутихла', 5),
  neuterPast: Word('приутихло', 5),
  pluralPast: Word('приутихли', 5),
  imperativeInformal: Word('приутихни', 5),
  imperativeFormal: Word('приутихните', 5),
  imperfect: [],
};

perfectVerbs.set(приутихнуть.name.text, приутихнуть);

export { приутихнуть };