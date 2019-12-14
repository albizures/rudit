import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поравняться: PerfectVerb = {
  name: Word('поравняться', 6),
  singular1stPerson: Word('поравняюсь', 6),
  singular2ndPerson: Word('поравняешься', 6),
  singular3rdPerson: Word('поравняется', 6),
  plural1stPerson: Word('поравняемся', 6),
  plural2ndPerson: Word('поравняетесь', 6),
  plural3rdPerson: Word('поравняются', 6),
  masculinePast: Word('поравнялся', 6),
  femininePast: Word('поравнялась', 6),
  neuterPast: Word('поравнялось', 6),
  pluralPast: Word('поравнялись', 6),
  imperativeInformal: Word('поравняйся', 6),
  imperativeFormal: Word('поравняйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поравняться.name.text, поравняться);

export { поравняться };