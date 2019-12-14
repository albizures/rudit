import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const квакнуть: PerfectVerb = {
  name: Word('квакнуть', 2),
  singular1stPerson: Word('квакну', 2),
  singular2ndPerson: Word('квакнешь', 2),
  singular3rdPerson: Word('квакнет', 2),
  plural1stPerson: Word('квакнем', 2),
  plural2ndPerson: Word('квакнете', 2),
  plural3rdPerson: Word('квакнут', 2),
  masculinePast: Word('квакнул', 2),
  femininePast: Word('квакнула', 2),
  neuterPast: Word('квакнуло', 2),
  pluralPast: Word('квакнули', 2),
  imperativeInformal: Word('квакни', 2),
  imperativeFormal: Word('квакните', 2),
  imperfect: [],
};

perfectVerbs.set(квакнуть.name.text, квакнуть);

export { квакнуть };