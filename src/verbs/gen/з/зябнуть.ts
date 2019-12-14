import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зябнуть: PerfectVerb = {
  name: Word('зябнуть', 1),
  singular1stPerson: Word('зябну', 1),
  singular2ndPerson: Word('зябнешь', 1),
  singular3rdPerson: Word('зябнет', 1),
  plural1stPerson: Word('зябнем', 1),
  plural2ndPerson: Word('зябнете', 1),
  plural3rdPerson: Word('зябнут', 1),
  masculinePast: Word('зяб//зя'бнул', 1),
  femininePast: Word('зябла', 1),
  neuterPast: Word('зябло', 1),
  pluralPast: Word('зябли', 1),
  imperativeInformal: Word('зябни', 1),
  imperativeFormal: Word('зябните', 1),
  imperfect: [],
};

perfectVerbs.set(зябнуть.name.text, зябнуть);

export { зябнуть };