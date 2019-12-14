import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вязнуть: PerfectVerb = {
  name: Word('вязнуть', 1),
  singular1stPerson: Word('вязну', 1),
  singular2ndPerson: Word('вязнешь', 1),
  singular3rdPerson: Word('вязнет', 1),
  plural1stPerson: Word('вязнем', 1),
  plural2ndPerson: Word('вязнете', 1),
  plural3rdPerson: Word('вязнут', 1),
  masculinePast: Word('вяз//вя'знул', 1),
  femininePast: Word('вязла', 1),
  neuterPast: Word('вязло', 1),
  pluralPast: Word('вязли', 1),
  imperativeInformal: Word('вязни', 1),
  imperativeFormal: Word('вязните', 1),
  imperfect: [],
};

perfectVerbs.set(вязнуть.name.text, вязнуть);

export { вязнуть };