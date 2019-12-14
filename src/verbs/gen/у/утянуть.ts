import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утянуть: PerfectVerb = {
  name: Word('утянуть', 4),
  singular1stPerson: Word('утяну', 4),
  singular2ndPerson: Word('утянешь', 2),
  singular3rdPerson: Word('утянет', 2),
  plural1stPerson: Word('утянем', 2),
  plural2ndPerson: Word('утянете', 2),
  plural3rdPerson: Word('утянут', 2),
  masculinePast: Word('утянул', 4),
  femininePast: Word('утянула', 4),
  neuterPast: Word('утянуло', 4),
  pluralPast: Word('утянули', 4),
  imperativeInformal: Word('утяни', 4),
  imperativeFormal: Word('утяните', 4),
  imperfect: [],
};

perfectVerbs.set(утянуть.name.text, утянуть);

export { утянуть };