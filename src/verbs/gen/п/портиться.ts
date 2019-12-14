import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const портиться: PerfectVerb = {
  name: Word('портиться', 1),
  singular1stPerson: Word('порчусь', 1),
  singular2ndPerson: Word('портишься', 1),
  singular3rdPerson: Word('портится', 1),
  plural1stPerson: Word('портимся', 1),
  plural2ndPerson: Word('портитесь', 1),
  plural3rdPerson: Word('портятся', 1),
  masculinePast: Word('портился', 1),
  femininePast: Word('портилась', 1),
  neuterPast: Word('портилось', 1),
  pluralPast: Word('портились', 1),
  imperativeInformal: Word('портись', 1),
  imperativeFormal: Word('портитесь', 1),
  imperfect: [],
};

perfectVerbs.set(портиться.name.text, портиться);

export { портиться };