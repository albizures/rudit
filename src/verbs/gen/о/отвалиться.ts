import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвалиться: PerfectVerb = {
  name: Word('отвалиться', 5),
  singular1stPerson: Word('отвалюсь', 5),
  singular2ndPerson: Word('отвалишься', 3),
  singular3rdPerson: Word('отвалится', 3),
  plural1stPerson: Word('отвалимся', 3),
  plural2ndPerson: Word('отвалитесь', 3),
  plural3rdPerson: Word('отвалятся', 3),
  masculinePast: Word('отвалился', 5),
  femininePast: Word('отвалилась', 5),
  neuterPast: Word('отвалилось', 5),
  pluralPast: Word('отвалились', 5),
  imperativeInformal: Word('отвались', 5),
  imperativeFormal: Word('отвалитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отвалиться.name.text, отвалиться);

export { отвалиться };