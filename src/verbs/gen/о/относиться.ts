import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const относиться: PerfectVerb = {
  name: Word('относиться', 5),
  singular1stPerson: Word('отношусь', 5),
  singular2ndPerson: Word('относишься', 3),
  singular3rdPerson: Word('относится', 3),
  plural1stPerson: Word('относимся', 3),
  plural2ndPerson: Word('относитесь', 3),
  plural3rdPerson: Word('относятся', 3),
  masculinePast: Word('относился', 5),
  femininePast: Word('относилась', 5),
  neuterPast: Word('относилось', 5),
  pluralPast: Word('относились', 5),
  imperativeInformal: Word('относись', 5),
  imperativeFormal: Word('относитесь', 5),
  imperfect: ['отнестись'],
};

perfectVerbs.set(относиться.name.text, относиться);

export { относиться };