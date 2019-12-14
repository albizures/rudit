import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мазаться: PerfectVerb = {
  name: Word('мазаться', 1),
  singular1stPerson: Word('мажусь', 1),
  singular2ndPerson: Word('мажешься', 1),
  singular3rdPerson: Word('мажется', 1),
  plural1stPerson: Word('мажемся', 1),
  plural2ndPerson: Word('мажетесь', 1),
  plural3rdPerson: Word('мажутся', 1),
  masculinePast: Word('мазался', 1),
  femininePast: Word('мазалась', 1),
  neuterPast: Word('мазалось', 1),
  pluralPast: Word('мазались', 1),
  imperativeInformal: Word('мажься', 1),
  imperativeFormal: Word('мажьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(мазаться.name.text, мазаться);

export { мазаться };