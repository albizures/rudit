import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грязнуть: PerfectVerb = {
  name: Word('грязнуть', 2),
  singular1stPerson: Word('грязну', 2),
  singular2ndPerson: Word('грязнешь', 2),
  singular3rdPerson: Word('грязнет', 2),
  plural1stPerson: Word('грязнем', 2),
  plural2ndPerson: Word('грязнете', 2),
  plural3rdPerson: Word('грязнут', 2),
  masculinePast: Word('гряз//гря'знул', 2),
  femininePast: Word('грязла', 2),
  neuterPast: Word('грязло', 2),
  pluralPast: Word('грязли', 2),
  imperativeInformal: Word('грязни', 2),
  imperativeFormal: Word('грязните', 2),
  imperfect: [],
};

perfectVerbs.set(грязнуть.name.text, грязнуть);

export { грязнуть };