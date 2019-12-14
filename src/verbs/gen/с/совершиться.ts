import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совершиться: PerfectVerb = {
  name: Word('совершиться', 6),
  singular1stPerson: Word('совершусь', 6),
  singular2ndPerson: Word('совершишься', 6),
  singular3rdPerson: Word('совершится', 6),
  plural1stPerson: Word('совершимся', 6),
  plural2ndPerson: Word('совершитесь', 6),
  plural3rdPerson: Word('совершатся', 6),
  masculinePast: Word('совершился', 6),
  femininePast: Word('совершилась', 6),
  neuterPast: Word('совершилось', 6),
  pluralPast: Word('совершились', 6),
  imperativeInformal: Word('совершись', 6),
  imperativeFormal: Word('совершитесь', 6),
  imperfect: [],
};

perfectVerbs.set(совершиться.name.text, совершиться);

export { совершиться };