import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const яриться: PerfectVerb = {
  name: Word('яриться', 2),
  singular1stPerson: Word('ярюсь', 2),
  singular2ndPerson: Word('яришься', 2),
  singular3rdPerson: Word('ярится', 2),
  plural1stPerson: Word('яримся', 2),
  plural2ndPerson: Word('яритесь', 2),
  plural3rdPerson: Word('ярятся', 2),
  masculinePast: Word('ярился', 2),
  femininePast: Word('ярилась', 2),
  neuterPast: Word('ярилось', 2),
  pluralPast: Word('ярились', 2),
  imperativeInformal: Word('ярись', 2),
  imperativeFormal: Word('яритесь', 2),
  imperfect: [],
};

perfectVerbs.set(яриться.name.text, яриться);

export { яриться };