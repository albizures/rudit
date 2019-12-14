import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жмуриться: PerfectVerb = {
  name: Word('жмуриться', 2),
  singular1stPerson: Word('жмурюсь', 2),
  singular2ndPerson: Word('жмуришься', 2),
  singular3rdPerson: Word('жмурится', 2),
  plural1stPerson: Word('жмуримся', 2),
  plural2ndPerson: Word('жмуритесь', 2),
  plural3rdPerson: Word('жмурятся', 2),
  masculinePast: Word('жмурился', 2),
  femininePast: Word('жмурилась', 2),
  neuterPast: Word('жмурилось', 2),
  pluralPast: Word('жмурились', 2),
  imperativeInformal: Word('жмурься', 2),
  imperativeFormal: Word('жмурьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(жмуриться.name.text, жмуриться);

export { жмуриться };