import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const знакомить: PerfectVerb = {
  name: Word('знакомить', 4),
  singular1stPerson: Word('знакомлю', 4),
  singular2ndPerson: Word('знакомишь', 4),
  singular3rdPerson: Word('знакомит', 4),
  plural1stPerson: Word('знакомим', 4),
  plural2ndPerson: Word('знакомите', 4),
  plural3rdPerson: Word('знакомят', 4),
  masculinePast: Word('знакомил', 4),
  femininePast: Word('знакомила', 4),
  neuterPast: Word('знакомило', 4),
  pluralPast: Word('знакомили', 4),
  imperativeInformal: Word('знакомь', 4),
  imperativeFormal: Word('знакомьте', 4),
  imperfect: [],
};

perfectVerbs.set(знакомить.name.text, знакомить);

export { знакомить };