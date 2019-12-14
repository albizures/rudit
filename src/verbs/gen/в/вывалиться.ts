import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывалиться: PerfectVerb = {
  name: Word('вывалиться', 1),
  singular1stPerson: Word('вывалюсь', 1),
  singular2ndPerson: Word('вывалишься', 1),
  singular3rdPerson: Word('вывалится', 1),
  plural1stPerson: Word('вывалимся', 1),
  plural2ndPerson: Word('вывалитесь', 1),
  plural3rdPerson: Word('вывалятся', 1),
  masculinePast: Word('вывалился', 1),
  femininePast: Word('вывалилась', 1),
  neuterPast: Word('вывалилось', 1),
  pluralPast: Word('вывалились', 1),
  imperativeInformal: Word('вывались', 1),
  imperativeFormal: Word('вывалитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вывалиться.name.text, вывалиться);

export { вывалиться };