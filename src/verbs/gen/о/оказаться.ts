import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оказаться: PerfectVerb = {
  name: Word('оказаться', 4),
  singular1stPerson: Word('окажусь', 4),
  singular2ndPerson: Word('окажешься', 2),
  singular3rdPerson: Word('окажется', 2),
  plural1stPerson: Word('окажемся', 2),
  plural2ndPerson: Word('окажетесь', 2),
  plural3rdPerson: Word('окажутся', 2),
  masculinePast: Word('оказался', 4),
  femininePast: Word('оказалась', 4),
  neuterPast: Word('оказалось', 4),
  pluralPast: Word('оказались', 4),
  imperativeInformal: Word('окажись', 4),
  imperativeFormal: Word('окажитесь', 4),
  imperfect: ['оказываться'],
};

perfectVerbs.set(оказаться.name.text, оказаться);

export { оказаться };