import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сказаться: PerfectVerb = {
  name: Word('сказаться', 4),
  singular1stPerson: Word('скажусь', 4),
  singular2ndPerson: Word('скажешься', 2),
  singular3rdPerson: Word('скажется', 2),
  plural1stPerson: Word('скажемся', 2),
  plural2ndPerson: Word('скажетесь', 2),
  plural3rdPerson: Word('скажутся', 2),
  masculinePast: Word('сказался', 4),
  femininePast: Word('сказалась', 4),
  neuterPast: Word('сказалось', 4),
  pluralPast: Word('сказались', 4),
  imperativeInformal: Word('скажись', 4),
  imperativeFormal: Word('скажитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сказаться.name.text, сказаться);

export { сказаться };