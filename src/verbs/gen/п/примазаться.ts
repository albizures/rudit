import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примазаться: PerfectVerb = {
  name: Word('примазаться', 4),
  singular1stPerson: Word('примажусь', 4),
  singular2ndPerson: Word('примажешься', 4),
  singular3rdPerson: Word('примажется', 4),
  plural1stPerson: Word('примажемся', 4),
  plural2ndPerson: Word('примажетесь', 4),
  plural3rdPerson: Word('примажутся', 4),
  masculinePast: Word('примазался', 4),
  femininePast: Word('примазалась', 4),
  neuterPast: Word('примазалось', 4),
  pluralPast: Word('примазались', 4),
  imperativeInformal: Word('примажься', 4),
  imperativeFormal: Word('примажьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(примазаться.name.text, примазаться);

export { примазаться };