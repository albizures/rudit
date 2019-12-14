import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защититься: PerfectVerb = {
  name: Word('защититься', 5),
  singular1stPerson: Word('защищусь', 5),
  singular2ndPerson: Word('защитишься', 5),
  singular3rdPerson: Word('защитится', 5),
  plural1stPerson: Word('защитимся', 5),
  plural2ndPerson: Word('защититесь', 5),
  plural3rdPerson: Word('защитятся', 5),
  masculinePast: Word('защитился', 5),
  femininePast: Word('защитилась', 5),
  neuterPast: Word('защитилось', 5),
  pluralPast: Word('защитились', 5),
  imperativeInformal: Word('защитись', 5),
  imperativeFormal: Word('защититесь', 5),
  imperfect: [],
};

perfectVerbs.set(защититься.name.text, защититься);

export { защититься };