import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const парить: PerfectVerb = {
  name: Word('парить', 3),
  singular1stPerson: Word('парю', 3),
  singular2ndPerson: Word('паришь', 3),
  singular3rdPerson: Word('парит', 3),
  plural1stPerson: Word('парим', 3),
  plural2ndPerson: Word('парите', 3),
  plural3rdPerson: Word('парят', 3),
  masculinePast: Word('парил', 3),
  femininePast: Word('парила', 3),
  neuterPast: Word('парило', 3),
  pluralPast: Word('парили', 3),
  imperativeInformal: Word('пари', 3),
  imperativeFormal: Word('парите', 3),
  imperfect: [],
};

perfectVerbs.set(парить.name.text, парить);

export { парить };