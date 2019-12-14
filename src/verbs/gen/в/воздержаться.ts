import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздержаться: PerfectVerb = {
  name: Word('воздержаться', 7),
  singular1stPerson: Word('воздержусь', 7),
  singular2ndPerson: Word('воздержишься', 4),
  singular3rdPerson: Word('воздержится', 4),
  plural1stPerson: Word('воздержимся', 4),
  plural2ndPerson: Word('воздержитесь', 4),
  plural3rdPerson: Word('воздержатся', 4),
  masculinePast: Word('воздержался', 7),
  femininePast: Word('воздержалась', 7),
  neuterPast: Word('воздержалось', 7),
  pluralPast: Word('воздержались', 7),
  imperativeInformal: Word('воздержись', 7),
  imperativeFormal: Word('воздержитесь', 7),
  imperfect: ['воздерживаться'],
};

perfectVerbs.set(воздержаться.name.text, воздержаться);

export { воздержаться };