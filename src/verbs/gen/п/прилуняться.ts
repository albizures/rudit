import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилуняться: PerfectVerb = {
  name: Word('прилуняться', 6),
  singular1stPerson: Word('прилуняюсь', 6),
  singular2ndPerson: Word('прилуняешься', 6),
  singular3rdPerson: Word('прилуняется', 6),
  plural1stPerson: Word('прилуняемся', 6),
  plural2ndPerson: Word('прилуняетесь', 6),
  plural3rdPerson: Word('прилуняются', 6),
  masculinePast: Word('прилунялся', 6),
  femininePast: Word('прилунялась', 6),
  neuterPast: Word('прилунялось', 6),
  pluralPast: Word('прилунялись', 6),
  imperativeInformal: Word('прилуняйся', 6),
  imperativeFormal: Word('прилуняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прилуняться.name.text, прилуняться);

export { прилуняться };