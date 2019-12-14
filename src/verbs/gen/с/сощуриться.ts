import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сощуриться: PerfectVerb = {
  name: Word('сощуриться', 3),
  singular1stPerson: Word('сощурюсь', 3),
  singular2ndPerson: Word('сощуришься', 3),
  singular3rdPerson: Word('сощурится', 3),
  plural1stPerson: Word('сощуримся', 3),
  plural2ndPerson: Word('сощуритесь', 3),
  plural3rdPerson: Word('сощурятся', 3),
  masculinePast: Word('сощурился', 3),
  femininePast: Word('сощурилась', 3),
  neuterPast: Word('сощурилось', 3),
  pluralPast: Word('сощурились', 3),
  imperativeInformal: Word('сощурься', 3),
  imperativeFormal: Word('сощурьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сощуриться.name.text, сощуриться);

export { сощуриться };