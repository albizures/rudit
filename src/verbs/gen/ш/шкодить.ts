import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шкодить: PerfectVerb = {
  name: Word('шкодить', 2),
  singular1stPerson: Word('шкожу', 2),
  singular2ndPerson: Word('шкодишь', 2),
  singular3rdPerson: Word('шкодит', 2),
  plural1stPerson: Word('шкодим', 2),
  plural2ndPerson: Word('шкодите', 2),
  plural3rdPerson: Word('шкодят', 2),
  masculinePast: Word('шкодил', 2),
  femininePast: Word('шкодила', 2),
  neuterPast: Word('шкодило', 2),
  pluralPast: Word('шкодили', 2),
  imperativeInformal: Word('шкодь', 2),
  imperativeFormal: Word('шкодьте', 2),
  imperfect: [],
};

perfectVerbs.set(шкодить.name.text, шкодить);

export { шкодить };