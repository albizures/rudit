import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмазаться: PerfectVerb = {
  name: Word('обмазаться', 3),
  singular1stPerson: Word('обмажусь', 3),
  singular2ndPerson: Word('обмажешься', 3),
  singular3rdPerson: Word('обмажется', 3),
  plural1stPerson: Word('обмажемся', 3),
  plural2ndPerson: Word('обмажетесь', 3),
  plural3rdPerson: Word('обмажутся', 3),
  masculinePast: Word('обмазался', 3),
  femininePast: Word('обмазалась', 3),
  neuterPast: Word('обмазалось', 3),
  pluralPast: Word('обмазались', 3),
  imperativeInformal: Word('обмажься', 3),
  imperativeFormal: Word('обмажьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обмазаться.name.text, обмазаться);

export { обмазаться };