import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насторожить: PerfectVerb = {
  name: Word('насторожить', 8),
  singular1stPerson: Word('насторожу', 8),
  singular2ndPerson: Word('насторожишь', 8),
  singular3rdPerson: Word('насторожит', 8),
  plural1stPerson: Word('насторожим', 8),
  plural2ndPerson: Word('насторожите', 8),
  plural3rdPerson: Word('насторожат', 8),
  masculinePast: Word('насторожил', 8),
  femininePast: Word('насторожила', 8),
  neuterPast: Word('насторожило', 8),
  pluralPast: Word('насторожили', 8),
  imperativeInformal: Word('насторожи', 8),
  imperativeFormal: Word('насторожите', 8),
  imperfect: [],
};

perfectVerbs.set(насторожить.name.text, насторожить);

export { насторожить };