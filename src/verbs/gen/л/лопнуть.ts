import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лопнуть: PerfectVerb = {
  name: Word('лопнуть', 1),
  singular1stPerson: Word('лопну', 1),
  singular2ndPerson: Word('лопнешь', 1),
  singular3rdPerson: Word('лопнет', 1),
  plural1stPerson: Word('лопнем', 1),
  plural2ndPerson: Word('лопнете', 1),
  plural3rdPerson: Word('лопнут', 1),
  masculinePast: Word('лопнул', 1),
  femininePast: Word('лопнула', 1),
  neuterPast: Word('лопнуло', 1),
  pluralPast: Word('лопнули', 1),
  imperativeInformal: Word('лопни', 1),
  imperativeFormal: Word('лопните', 1),
  imperfect: [],
};

perfectVerbs.set(лопнуть.name.text, лопнуть);

export { лопнуть };