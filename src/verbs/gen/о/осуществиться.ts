import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осуществиться: PerfectVerb = {
  name: Word('осуществиться', 8),
  singular1stPerson: Word('осуществлюсь', 9),
  singular2ndPerson: Word('осуществишься', 8),
  singular3rdPerson: Word('осуществится', 8),
  plural1stPerson: Word('осуществимся', 8),
  plural2ndPerson: Word('осуществитесь', 8),
  plural3rdPerson: Word('осуществятся', 8),
  masculinePast: Word('осуществился', 8),
  femininePast: Word('осуществилась', 8),
  neuterPast: Word('осуществилось', 8),
  pluralPast: Word('осуществились', 8),
  imperativeInformal: Word('осуществись', 8),
  imperativeFormal: Word('осуществитесь', 8),
  imperfect: ['осуществляться'],
};

perfectVerbs.set(осуществиться.name.text, осуществиться);

export { осуществиться };