import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огорчиться: PerfectVerb = {
  name: Word('огорчиться', 5),
  singular1stPerson: Word('огорчусь', 5),
  singular2ndPerson: Word('огорчишься', 5),
  singular3rdPerson: Word('огорчится', 5),
  plural1stPerson: Word('огорчимся', 5),
  plural2ndPerson: Word('огорчитесь', 5),
  plural3rdPerson: Word('огорчатся', 5),
  masculinePast: Word('огорчился', 5),
  femininePast: Word('огорчилась', 5),
  neuterPast: Word('огорчилось', 5),
  pluralPast: Word('огорчились', 5),
  imperativeInformal: Word('огорчись', 5),
  imperativeFormal: Word('огорчитесь', 5),
  imperfect: [],
};

perfectVerbs.set(огорчиться.name.text, огорчиться);

export { огорчиться };