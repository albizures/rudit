import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увязнуть: PerfectVerb = {
  name: Word('увязнуть', 2),
  singular1stPerson: Word('увязну', 2),
  singular2ndPerson: Word('увязнешь', 2),
  singular3rdPerson: Word('увязнет', 2),
  plural1stPerson: Word('увязнем', 2),
  plural2ndPerson: Word('увязнете', 2),
  plural3rdPerson: Word('увязнут', 2),
  masculinePast: Word('увяз', 2),
  femininePast: Word('увязла', 2),
  neuterPast: Word('увязло', 2),
  pluralPast: Word('увязли', 2),
  imperativeInformal: Word('увязни', 2),
  imperativeFormal: Word('увязните', 2),
  imperfect: [],
};

perfectVerbs.set(увязнуть.name.text, увязнуть);

export { увязнуть };