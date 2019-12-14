import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похвалиться: PerfectVerb = {
  name: Word('похвалиться', 6),
  singular1stPerson: Word('похвалюсь', 6),
  singular2ndPerson: Word('похвалишься', 4),
  singular3rdPerson: Word('похвалится', 4),
  plural1stPerson: Word('похвалимся', 4),
  plural2ndPerson: Word('похвалитесь', 4),
  plural3rdPerson: Word('похвалятся', 4),
  masculinePast: Word('похвалился', 6),
  femininePast: Word('похвалилась', 6),
  neuterPast: Word('похвалилось', 6),
  pluralPast: Word('похвалились', 6),
  imperativeInformal: Word('похвались', 6),
  imperativeFormal: Word('похвалитесь', 6),
  imperfect: [],
};

perfectVerbs.set(похвалиться.name.text, похвалиться);

export { похвалиться };