import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шпионить: PerfectVerb = {
  name: Word('шпионить', 3),
  singular1stPerson: Word('шпионю', 3),
  singular2ndPerson: Word('шпионишь', 3),
  singular3rdPerson: Word('шпионит', 3),
  plural1stPerson: Word('шпионим', 3),
  plural2ndPerson: Word('шпионите', 3),
  plural3rdPerson: Word('шпионят', 3),
  masculinePast: Word('шпионил', 3),
  femininePast: Word('шпионила', 3),
  neuterPast: Word('шпионило', 3),
  pluralPast: Word('шпионили', 3),
  imperativeInformal: Word('шпионь', 3),
  imperativeFormal: Word('шпионьте', 3),
  imperfect: [],
};

perfectVerbs.set(шпионить.name.text, шпионить);

export { шпионить };