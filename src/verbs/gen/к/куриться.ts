import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const куриться: PerfectVerb = {
  name: Word('куриться', 3),
  singular1stPerson: Word('курюсь', 3),
  singular2ndPerson: Word('куришься', 1),
  singular3rdPerson: Word('курится', 1),
  plural1stPerson: Word('куримся', 1),
  plural2ndPerson: Word('куритесь', 1),
  plural3rdPerson: Word('курятся', 1),
  masculinePast: Word('курился', 3),
  femininePast: Word('курилась', 3),
  neuterPast: Word('курилось', 3),
  pluralPast: Word('курились', 3),
  imperativeInformal: Word('курись', 3),
  imperativeFormal: Word('куритесь', 3),
  imperfect: [],
};

perfectVerbs.set(куриться.name.text, куриться);

export { куриться };