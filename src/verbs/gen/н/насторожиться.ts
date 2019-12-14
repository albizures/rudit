import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насторожиться: PerfectVerb = {
  name: Word('насторожиться', 8),
  singular1stPerson: Word('насторожусь', 8),
  singular2ndPerson: Word('насторожишься', 8),
  singular3rdPerson: Word('насторожится', 8),
  plural1stPerson: Word('насторожимся', 8),
  plural2ndPerson: Word('насторожитесь', 8),
  plural3rdPerson: Word('насторожатся', 8),
  masculinePast: Word('насторожился', 8),
  femininePast: Word('насторожилась', 8),
  neuterPast: Word('насторожилось', 8),
  pluralPast: Word('насторожились', 8),
  imperativeInformal: Word('насторожись', 8),
  imperativeFormal: Word('насторожитесь', 8),
  imperfect: [],
};

perfectVerbs.set(насторожиться.name.text, насторожиться);

export { насторожиться };