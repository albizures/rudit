import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскандалиться: PerfectVerb = {
  name: Word('оскандалиться', 6),
  singular1stPerson: Word('оскандалюсь', 6),
  singular2ndPerson: Word('оскандалишься', 6),
  singular3rdPerson: Word('оскандалится', 6),
  plural1stPerson: Word('оскандалимся', 6),
  plural2ndPerson: Word('оскандалитесь', 6),
  plural3rdPerson: Word('оскандалятся', 6),
  masculinePast: Word('оскандалился', 6),
  femininePast: Word('оскандалилась', 6),
  neuterPast: Word('оскандалилось', 6),
  pluralPast: Word('оскандалились', 6),
  imperativeInformal: Word('оскандалься', 6),
  imperativeFormal: Word('оскандальтесь', 6),
  imperfect: [],
};

perfectVerbs.set(оскандалиться.name.text, оскандалиться);

export { оскандалиться };