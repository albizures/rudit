import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завалиться: PerfectVerb = {
  name: Word('завалиться', 5),
  singular1stPerson: Word('завалюсь', 5),
  singular2ndPerson: Word('завалишься', 3),
  singular3rdPerson: Word('завалится', 3),
  plural1stPerson: Word('завалимся', 3),
  plural2ndPerson: Word('завалитесь', 3),
  plural3rdPerson: Word('завалятся', 3),
  masculinePast: Word('завалился', 5),
  femininePast: Word('завалилась', 5),
  neuterPast: Word('завалилось', 5),
  pluralPast: Word('завалились', 5),
  imperativeInformal: Word('завались', 5),
  imperativeFormal: Word('завалитесь', 5),
  imperfect: [],
};

perfectVerbs.set(завалиться.name.text, завалиться);

export { завалиться };