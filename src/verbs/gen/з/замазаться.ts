import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замазаться: PerfectVerb = {
  name: Word('замазаться', 3),
  singular1stPerson: Word('замажусь', 3),
  singular2ndPerson: Word('замажешься', 3),
  singular3rdPerson: Word('замажется', 3),
  plural1stPerson: Word('замажемся', 3),
  plural2ndPerson: Word('замажетесь', 3),
  plural3rdPerson: Word('замажутся', 3),
  masculinePast: Word('замазался', 3),
  femininePast: Word('замазалась', 3),
  neuterPast: Word('замазалось', 3),
  pluralPast: Word('замазались', 3),
  imperativeInformal: Word('замажься', 3),
  imperativeFormal: Word('замажьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(замазаться.name.text, замазаться);

export { замазаться };