import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иссякнуть: PerfectVerb = {
  name: Word('иссякнуть', 3),
  singular1stPerson: Word('иссякну', 3),
  singular2ndPerson: Word('иссякнешь', 3),
  singular3rdPerson: Word('иссякнет', 3),
  plural1stPerson: Word('иссякнем', 3),
  plural2ndPerson: Word('иссякнете', 3),
  plural3rdPerson: Word('иссякнут', 3),
  masculinePast: Word('иссяк', 3),
  femininePast: Word('иссякла', 3),
  neuterPast: Word('иссякло', 3),
  pluralPast: Word('иссякли', 3),
  imperativeInformal: Word('иссякни', 3),
  imperativeFormal: Word('иссякните', 3),
  imperfect: [],
};

perfectVerbs.set(иссякнуть.name.text, иссякнуть);

export { иссякнуть };