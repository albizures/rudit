import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вписаться: PerfectVerb = {
  name: Word('вписаться', 4),
  singular1stPerson: Word('впишусь', 4),
  singular2ndPerson: Word('впишешься', 2),
  singular3rdPerson: Word('впишется', 2),
  plural1stPerson: Word('впишемся', 2),
  plural2ndPerson: Word('впишетесь', 2),
  plural3rdPerson: Word('впишутся', 2),
  masculinePast: Word('вписался', 4),
  femininePast: Word('вписалась', 4),
  neuterPast: Word('вписалось', 4),
  pluralPast: Word('вписались', 4),
  imperativeInformal: Word('впишись', 4),
  imperativeFormal: Word('впишитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вписаться.name.text, вписаться);

export { вписаться };