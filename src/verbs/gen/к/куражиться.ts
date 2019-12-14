import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const куражиться: PerfectVerb = {
  name: Word('куражиться', 3),
  singular1stPerson: Word('куражусь', 3),
  singular2ndPerson: Word('куражишься', 3),
  singular3rdPerson: Word('куражится', 3),
  plural1stPerson: Word('куражимся', 3),
  plural2ndPerson: Word('куражитесь', 3),
  plural3rdPerson: Word('куражатся', 3),
  masculinePast: Word('куражился', 3),
  femininePast: Word('куражилась', 3),
  neuterPast: Word('куражилось', 3),
  pluralPast: Word('куражились', 3),
  imperativeInformal: Word('куражься', 3),
  imperativeFormal: Word('куражьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(куражиться.name.text, куражиться);

export { куражиться };