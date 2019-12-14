import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развалиться: PerfectVerb = {
  name: Word('развалиться', 6),
  singular1stPerson: Word('развалюсь', 6),
  singular2ndPerson: Word('развалишься', 4),
  singular3rdPerson: Word('развалится', 4),
  plural1stPerson: Word('развалимся', 4),
  plural2ndPerson: Word('развалитесь', 4),
  plural3rdPerson: Word('развалятся', 4),
  masculinePast: Word('развалился', 6),
  femininePast: Word('развалилась', 6),
  neuterPast: Word('развалилось', 6),
  pluralPast: Word('развалились', 6),
  imperativeInformal: Word('развались', 6),
  imperativeFormal: Word('развалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(развалиться.name.text, развалиться);

export { развалиться };