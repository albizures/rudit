import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымазаться: PerfectVerb = {
  name: Word('вымазаться', 1),
  singular1stPerson: Word('вымажусь', 1),
  singular2ndPerson: Word('вымажешься', 1),
  singular3rdPerson: Word('вымажется', 1),
  plural1stPerson: Word('вымажемся', 1),
  plural2ndPerson: Word('вымажетесь', 1),
  plural3rdPerson: Word('вымажутся', 1),
  masculinePast: Word('вымазался', 1),
  femininePast: Word('вымазалась', 1),
  neuterPast: Word('вымазалось', 1),
  pluralPast: Word('вымазались', 1),
  imperativeInformal: Word('вымажись//вы'мажься', 1),
  imperativeFormal: Word('вымажьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вымазаться.name.text, вымазаться);

export { вымазаться };