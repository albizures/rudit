import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размазаться: PerfectVerb = {
  name: Word('размазаться', 4),
  singular1stPerson: Word('размажусь', 4),
  singular2ndPerson: Word('размажешься', 4),
  singular3rdPerson: Word('размажется', 4),
  plural1stPerson: Word('размажемся', 4),
  plural2ndPerson: Word('размажетесь', 4),
  plural3rdPerson: Word('размажутся', 4),
  masculinePast: Word('размазался', 4),
  femininePast: Word('размазалась', 4),
  neuterPast: Word('размазалось', 4),
  pluralPast: Word('размазались', 4),
  imperativeInformal: Word('размажься', 4),
  imperativeFormal: Word('размажьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(размазаться.name.text, размазаться);

export { размазаться };