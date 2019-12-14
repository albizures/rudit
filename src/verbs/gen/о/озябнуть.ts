import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озябнуть: PerfectVerb = {
  name: Word('озябнуть', 2),
  singular1stPerson: Word('озябну', 2),
  singular2ndPerson: Word('озябнешь', 2),
  singular3rdPerson: Word('озябнет', 2),
  plural1stPerson: Word('озябнем', 2),
  plural2ndPerson: Word('озябнете', 2),
  plural3rdPerson: Word('озябнут', 2),
  masculinePast: Word('озяб', 2),
  femininePast: Word('озябла', 2),
  neuterPast: Word('озябло', 2),
  pluralPast: Word('озябли', 2),
  imperativeInformal: Word('озябни', 2),
  imperativeFormal: Word('озябните', 2),
  imperfect: [],
};

perfectVerbs.set(озябнуть.name.text, озябнуть);

export { озябнуть };