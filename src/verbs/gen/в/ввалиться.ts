import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввалиться: PerfectVerb = {
  name: Word('ввалиться', 4),
  singular1stPerson: Word('ввалюсь', 4),
  singular2ndPerson: Word('ввалишься', 2),
  singular3rdPerson: Word('ввалится', 2),
  plural1stPerson: Word('ввалимся', 2),
  plural2ndPerson: Word('ввалитесь', 2),
  plural3rdPerson: Word('ввалятся', 2),
  masculinePast: Word('ввалился', 4),
  femininePast: Word('ввалилась', 4),
  neuterPast: Word('ввалилось', 4),
  pluralPast: Word('ввалились', 4),
  imperativeInformal: Word('ввались', 4),
  imperativeFormal: Word('ввалитесь', 4),
  imperfect: [],
};

perfectVerbs.set(ввалиться.name.text, ввалиться);

export { ввалиться };