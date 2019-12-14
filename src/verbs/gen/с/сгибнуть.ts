import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгибнуть: PerfectVerb = {
  name: Word('сгибнуть', 2),
  singular1stPerson: Word('сгибну', 2),
  singular2ndPerson: Word('сгибнешь', 2),
  singular3rdPerson: Word('сгибнет', 2),
  plural1stPerson: Word('сгибнем', 2),
  plural2ndPerson: Word('сгибнете', 2),
  plural3rdPerson: Word('сгибнут', 2),
  masculinePast: Word('сгиб', 2),
  femininePast: Word('сгибла', 2),
  neuterPast: Word('сгибло', 2),
  pluralPast: Word('сгибли', 2),
  imperativeInformal: Word('сгибни', 2),
  imperativeFormal: Word('сгибните', 2),
  imperfect: [],
};

perfectVerbs.set(сгибнуть.name.text, сгибнуть);

export { сгибнуть };