import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повалиться: PerfectVerb = {
  name: Word('повалиться', 5),
  singular1stPerson: Word('повалюсь', 5),
  singular2ndPerson: Word('повалишься', 3),
  singular3rdPerson: Word('повалится', 3),
  plural1stPerson: Word('повалимся', 3),
  plural2ndPerson: Word('повалитесь', 3),
  plural3rdPerson: Word('повалятся', 3),
  masculinePast: Word('повалился', 5),
  femininePast: Word('повалилась', 5),
  neuterPast: Word('повалилось', 5),
  pluralPast: Word('повалились', 5),
  imperativeInformal: Word('повались', 5),
  imperativeFormal: Word('повалитесь', 5),
  imperfect: [],
};

perfectVerbs.set(повалиться.name.text, повалиться);

export { повалиться };