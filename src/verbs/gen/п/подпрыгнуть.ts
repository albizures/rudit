import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпрыгнуть: PerfectVerb = {
  name: Word('подпрыгнуть', 5),
  singular1stPerson: Word('подпрыгну', 5),
  singular2ndPerson: Word('подпрыгнешь', 5),
  singular3rdPerson: Word('подпрыгнет', 5),
  plural1stPerson: Word('подпрыгнем', 5),
  plural2ndPerson: Word('подпрыгнете', 5),
  plural3rdPerson: Word('подпрыгнут', 5),
  masculinePast: Word('подпрыгнул', 5),
  femininePast: Word('подпрыгнула', 5),
  neuterPast: Word('подпрыгнуло', 5),
  pluralPast: Word('подпрыгнули', 5),
  imperativeInformal: Word('подпрыгни', 5),
  imperativeFormal: Word('подпрыгните', 5),
  imperfect: [],
};

perfectVerbs.set(подпрыгнуть.name.text, подпрыгнуть);

export { подпрыгнуть };