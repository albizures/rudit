import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const печалиться: PerfectVerb = {
  name: Word('печалиться', 3),
  singular1stPerson: Word('печалюсь', 3),
  singular2ndPerson: Word('печалишься', 3),
  singular3rdPerson: Word('печалится', 3),
  plural1stPerson: Word('печалимся', 3),
  plural2ndPerson: Word('печалитесь', 3),
  plural3rdPerson: Word('печалятся', 3),
  masculinePast: Word('печалился', 3),
  femininePast: Word('печалилась', 3),
  neuterPast: Word('печалилось', 3),
  pluralPast: Word('печалились', 3),
  imperativeInformal: Word('печалься', 3),
  imperativeFormal: Word('печальтесь', 3),
  imperfect: [],
};

perfectVerbs.set(печалиться.name.text, печалиться);

export { печалиться };