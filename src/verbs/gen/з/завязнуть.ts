import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завязнуть: PerfectVerb = {
  name: Word('завязнуть', 3),
  singular1stPerson: Word('завязну', 3),
  singular2ndPerson: Word('завязнешь', 3),
  singular3rdPerson: Word('завязнет', 3),
  plural1stPerson: Word('завязнем', 3),
  plural2ndPerson: Word('завязнете', 3),
  plural3rdPerson: Word('завязнут', 3),
  masculinePast: Word('завяз', 3),
  femininePast: Word('завязла', 3),
  neuterPast: Word('завязло', 3),
  pluralPast: Word('завязли', 3),
  imperativeInformal: Word('завязни', 3),
  imperativeFormal: Word('завязните', 3),
  imperfect: [],
};

perfectVerbs.set(завязнуть.name.text, завязнуть);

export { завязнуть };