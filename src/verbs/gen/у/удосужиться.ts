import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удосужиться: PerfectVerb = {
  name: Word('удосужиться', 4),
  singular1stPerson: Word('удосужусь', 4),
  singular2ndPerson: Word('удосужишься', 4),
  singular3rdPerson: Word('удосужится', 4),
  plural1stPerson: Word('удосужимся', 4),
  plural2ndPerson: Word('удосужитесь', 4),
  plural3rdPerson: Word('удосужатся', 4),
  masculinePast: Word('удосужился', 4),
  femininePast: Word('удосужилась', 4),
  neuterPast: Word('удосужилось', 4),
  pluralPast: Word('удосужились', 4),
  imperativeInformal: Word('удосужься', 4),
  imperativeFormal: Word('удосужьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(удосужиться.name.text, удосужиться);

export { удосужиться };