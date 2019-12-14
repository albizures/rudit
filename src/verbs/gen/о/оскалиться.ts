import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскалиться: PerfectVerb = {
  name: Word('оскалиться', 3),
  singular1stPerson: Word('оскалюсь', 3),
  singular2ndPerson: Word('оскалишься', 3),
  singular3rdPerson: Word('оскалится', 3),
  plural1stPerson: Word('оскалимся', 3),
  plural2ndPerson: Word('оскалитесь', 3),
  plural3rdPerson: Word('оскалятся', 3),
  masculinePast: Word('оскалился', 3),
  femininePast: Word('оскалилась', 3),
  neuterPast: Word('оскалилось', 3),
  pluralPast: Word('оскалились', 3),
  imperativeInformal: Word('оскалься', 3),
  imperativeFormal: Word('оскальтесь', 3),
  imperfect: [],
};

perfectVerbs.set(оскалиться.name.text, оскалиться);

export { оскалиться };