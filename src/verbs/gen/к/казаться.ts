import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const казаться: PerfectVerb = {
  name: Word('казаться', 3),
  singular1stPerson: Word('кажусь', 3),
  singular2ndPerson: Word('кажешься', 1),
  singular3rdPerson: Word('кажется', 1),
  plural1stPerson: Word('кажемся', 1),
  plural2ndPerson: Word('кажетесь', 1),
  plural3rdPerson: Word('кажутся', 1),
  masculinePast: Word('казался', 3),
  femininePast: Word('казалась', 3),
  neuterPast: Word('казалось', 3),
  pluralPast: Word('казались', 3),
  imperativeInformal: Word('кажись', 3),
  imperativeFormal: Word('кажитесь', 3),
  imperfect: ['показаться'],
};

perfectVerbs.set(казаться.name.text, казаться);

export { казаться };