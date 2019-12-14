import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хмуриться: PerfectVerb = {
  name: Word('хмуриться', 2),
  singular1stPerson: Word('хмурюсь', 2),
  singular2ndPerson: Word('хмуришься', 2),
  singular3rdPerson: Word('хмурится', 2),
  plural1stPerson: Word('хмуримся', 2),
  plural2ndPerson: Word('хмуритесь', 2),
  plural3rdPerson: Word('хмурятся', 2),
  masculinePast: Word('хмурился', 2),
  femininePast: Word('хмурилась', 2),
  neuterPast: Word('хмурилось', 2),
  pluralPast: Word('хмурились', 2),
  imperativeInformal: Word('хмурься', 2),
  imperativeFormal: Word('хмурьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(хмуриться.name.text, хмуриться);

export { хмуриться };