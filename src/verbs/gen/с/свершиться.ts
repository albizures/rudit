import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свершиться: PerfectVerb = {
  name: Word('свершиться', 5),
  singular1stPerson: Word('свершусь', 5),
  singular2ndPerson: Word('свершишься', 5),
  singular3rdPerson: Word('свершится', 5),
  plural1stPerson: Word('свершимся', 5),
  plural2ndPerson: Word('свершитесь', 5),
  plural3rdPerson: Word('свершатся', 5),
  masculinePast: Word('свершился', 5),
  femininePast: Word('свершилась', 5),
  neuterPast: Word('свершилось', 5),
  pluralPast: Word('свершились', 5),
  imperativeInformal: Word('свершись', 5),
  imperativeFormal: Word('свершитесь', 5),
  imperfect: [],
};

perfectVerbs.set(свершиться.name.text, свершиться);

export { свершиться };