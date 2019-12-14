import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const равняться: PerfectVerb = {
  name: Word('равняться', 4),
  singular1stPerson: Word('равняюсь', 4),
  singular2ndPerson: Word('равняешься', 4),
  singular3rdPerson: Word('равняется', 4),
  plural1stPerson: Word('равняемся', 4),
  plural2ndPerson: Word('равняетесь', 4),
  plural3rdPerson: Word('равняются', 4),
  masculinePast: Word('равнялся', 4),
  femininePast: Word('равнялась', 4),
  neuterPast: Word('равнялось', 4),
  pluralPast: Word('равнялись', 4),
  imperativeInformal: Word('равняйся', 4),
  imperativeFormal: Word('равняйтесь', 4),
  imperfect: ['сравняться'],
};

perfectVerbs.set(равняться.name.text, равняться);

export { равняться };