import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ершиться: PerfectVerb = {
  name: Word('ершиться', 3),
  singular1stPerson: Word('ершусь', 3),
  singular2ndPerson: Word('ершишься', 3),
  singular3rdPerson: Word('ершится', 3),
  plural1stPerson: Word('ершимся', 3),
  plural2ndPerson: Word('ершитесь', 3),
  plural3rdPerson: Word('ершатся', 3),
  masculinePast: Word('ершился', 3),
  femininePast: Word('ершилась', 3),
  neuterPast: Word('ершилось', 3),
  pluralPast: Word('ершились', 3),
  imperativeInformal: Word('ершись', 3),
  imperativeFormal: Word('ершитесь', 3),
  imperfect: [],
};

perfectVerbs.set(ершиться.name.text, ершиться);

export { ершиться };