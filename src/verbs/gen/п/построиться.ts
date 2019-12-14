import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const построиться: PerfectVerb = {
  name: Word('построиться', 5),
  singular1stPerson: Word('построюсь', 5),
  singular2ndPerson: Word('построишься', 5),
  singular3rdPerson: Word('построится', 5),
  plural1stPerson: Word('построимся', 5),
  plural2ndPerson: Word('построитесь', 5),
  plural3rdPerson: Word('построятся', 5),
  masculinePast: Word('построился', 5),
  femininePast: Word('построилась', 5),
  neuterPast: Word('построилось', 5),
  pluralPast: Word('построились', 5),
  imperativeInformal: Word('постройся', 5),
  imperativeFormal: Word('постройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(построиться.name.text, построиться);

export { построиться };