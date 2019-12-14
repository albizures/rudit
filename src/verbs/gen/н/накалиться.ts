import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накалиться: PerfectVerb = {
  name: Word('накалиться', 5),
  singular1stPerson: Word('накалюсь', 5),
  singular2ndPerson: Word('накалишься', 5),
  singular3rdPerson: Word('накалится', 5),
  plural1stPerson: Word('накалимся', 5),
  plural2ndPerson: Word('накалитесь', 5),
  plural3rdPerson: Word('накалятся', 5),
  masculinePast: Word('накалился', 5),
  femininePast: Word('накалилась', 5),
  neuterPast: Word('накалилось', 5),
  pluralPast: Word('накалились', 5),
  imperativeInformal: Word('накались', 5),
  imperativeFormal: Word('накалитесь', 5),
  imperfect: [],
};

perfectVerbs.set(накалиться.name.text, накалиться);

export { накалиться };