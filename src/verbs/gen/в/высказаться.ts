import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высказаться: PerfectVerb = {
  name: Word('высказаться', 1),
  singular1stPerson: Word('выскажусь', 1),
  singular2ndPerson: Word('выскажешься', 1),
  singular3rdPerson: Word('выскажется', 1),
  plural1stPerson: Word('выскажемся', 1),
  plural2ndPerson: Word('выскажетесь', 1),
  plural3rdPerson: Word('выскажутся', 1),
  masculinePast: Word('высказался', 1),
  femininePast: Word('высказалась', 1),
  neuterPast: Word('высказалось', 1),
  pluralPast: Word('высказались', 1),
  imperativeInformal: Word('выскажись', 1),
  imperativeFormal: Word('выскажитесь', 1),
  imperfect: [],
};

perfectVerbs.set(высказаться.name.text, высказаться);

export { высказаться };