import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрезаться: PerfectVerb = {
  name: Word('изрезаться', 3),
  singular1stPerson: Word('изрежусь', 3),
  singular2ndPerson: Word('изрежешься', 3),
  singular3rdPerson: Word('изрежется', 3),
  plural1stPerson: Word('изрежемся', 3),
  plural2ndPerson: Word('изрежетесь', 3),
  plural3rdPerson: Word('изрежутся', 3),
  masculinePast: Word('изрезался', 3),
  femininePast: Word('изрезалась', 3),
  neuterPast: Word('изрезалось', 3),
  pluralPast: Word('изрезались', 3),
  imperativeInformal: Word('изрежься', 3),
  imperativeFormal: Word('изрежьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(изрезаться.name.text, изрезаться);

export { изрезаться };