import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажмуриться: PerfectVerb = {
  name: Word('зажмуриться', 4),
  singular1stPerson: Word('зажмурюсь', 4),
  singular2ndPerson: Word('зажмуришься', 4),
  singular3rdPerson: Word('зажмурится', 4),
  plural1stPerson: Word('зажмуримся', 4),
  plural2ndPerson: Word('зажмуритесь', 4),
  plural3rdPerson: Word('зажмурятся', 4),
  masculinePast: Word('зажмурился', 4),
  femininePast: Word('зажмурилась', 4),
  neuterPast: Word('зажмурилось', 4),
  pluralPast: Word('зажмурились', 4),
  imperativeInformal: Word('зажмурься', 4),
  imperativeFormal: Word('зажмурьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(зажмуриться.name.text, зажмуриться);

export { зажмуриться };