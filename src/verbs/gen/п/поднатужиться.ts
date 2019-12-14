import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поднатужиться: PerfectVerb = {
  name: Word('поднатужиться', 6),
  singular1stPerson: Word('поднатужусь', 6),
  singular2ndPerson: Word('поднатужишься', 6),
  singular3rdPerson: Word('поднатужится', 6),
  plural1stPerson: Word('поднатужимся', 6),
  plural2ndPerson: Word('поднатужитесь', 6),
  plural3rdPerson: Word('поднатужатся', 6),
  masculinePast: Word('поднатужился', 6),
  femininePast: Word('поднатужилась', 6),
  neuterPast: Word('поднатужилось', 6),
  pluralPast: Word('поднатужились', 6),
  imperativeInformal: Word('поднатужься', 6),
  imperativeFormal: Word('поднатужьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(поднатужиться.name.text, поднатужиться);

export { поднатужиться };