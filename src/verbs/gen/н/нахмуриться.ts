import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахмуриться: PerfectVerb = {
  name: Word('нахмуриться', 4),
  singular1stPerson: Word('нахмурюсь', 4),
  singular2ndPerson: Word('нахмуришься', 4),
  singular3rdPerson: Word('нахмурится', 4),
  plural1stPerson: Word('нахмуримся', 4),
  plural2ndPerson: Word('нахмуритесь', 4),
  plural3rdPerson: Word('нахмурятся', 4),
  masculinePast: Word('нахмурился', 4),
  femininePast: Word('нахмурилась', 4),
  neuterPast: Word('нахмурилось', 4),
  pluralPast: Word('нахмурились', 4),
  imperativeInformal: Word('нахмурься', 4),
  imperativeFormal: Word('нахмурьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(нахмуриться.name.text, нахмуриться);

export { нахмуриться };