import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намокнуть: PerfectVerb = {
  name: Word('намокнуть', 3),
  singular1stPerson: Word('намокну', 3),
  singular2ndPerson: Word('намокнешь', 3),
  singular3rdPerson: Word('намокнет', 3),
  plural1stPerson: Word('намокнем', 3),
  plural2ndPerson: Word('намокнете', 3),
  plural3rdPerson: Word('намокнут', 3),
  masculinePast: Word('намок', 3),
  femininePast: Word('намокла', 3),
  neuterPast: Word('намокло', 3),
  pluralPast: Word('намокли', 3),
  imperativeInformal: Word('намокни', 3),
  imperativeFormal: Word('намокните', 3),
  imperfect: [],
};

perfectVerbs.set(намокнуть.name.text, намокнуть);

export { намокнуть };