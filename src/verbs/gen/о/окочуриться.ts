import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окочуриться: PerfectVerb = {
  name: Word('окочуриться', 4),
  singular1stPerson: Word('окочурюсь', 4),
  singular2ndPerson: Word('окочуришься', 4),
  singular3rdPerson: Word('окочурится', 4),
  plural1stPerson: Word('окочуримся', 4),
  plural2ndPerson: Word('окочуритесь', 4),
  plural3rdPerson: Word('окочурятся', 4),
  masculinePast: Word('окочурился', 4),
  femininePast: Word('окочурилась', 4),
  neuterPast: Word('окочурилось', 4),
  pluralPast: Word('окочурились', 4),
  imperativeInformal: Word('окочурься', 4),
  imperativeFormal: Word('окочурьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(окочуриться.name.text, окочуриться);

export { окочуриться };