import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помазаться: PerfectVerb = {
  name: Word('помазаться', 3),
  singular1stPerson: Word('помажусь', 3),
  singular2ndPerson: Word('помажешься', 3),
  singular3rdPerson: Word('помажется', 3),
  plural1stPerson: Word('помажемся', 3),
  plural2ndPerson: Word('помажетесь', 3),
  plural3rdPerson: Word('помажутся', 3),
  masculinePast: Word('помазался', 3),
  femininePast: Word('помазалась', 3),
  neuterPast: Word('помазалось', 3),
  pluralPast: Word('помазались', 3),
  imperativeInformal: Word('помажься', 3),
  imperativeFormal: Word('помажьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(помазаться.name.text, помазаться);

export { помазаться };