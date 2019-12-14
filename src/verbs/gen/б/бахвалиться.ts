import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бахвалиться: PerfectVerb = {
  name: Word('бахвалиться', 4),
  singular1stPerson: Word('бахвалюсь', 4),
  singular2ndPerson: Word('бахвалишься', 4),
  singular3rdPerson: Word('бахвалится', 4),
  plural1stPerson: Word('бахвалимся', 4),
  plural2ndPerson: Word('бахвалитесь', 4),
  plural3rdPerson: Word('бахвалятся', 4),
  masculinePast: Word('бахвалился', 4),
  femininePast: Word('бахвалилась', 4),
  neuterPast: Word('бахвалилось', 4),
  pluralPast: Word('бахвалились', 4),
  imperativeInformal: Word('бахвалься', 4),
  imperativeFormal: Word('бахвальтесь', 4),
  imperfect: [],
};

perfectVerbs.set(бахвалиться.name.text, бахвалиться);

export { бахвалиться };