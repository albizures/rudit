import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приударить: PerfectVerb = {
  name: Word('приударить', 5),
  singular1stPerson: Word('приударю', 5),
  singular2ndPerson: Word('приударишь', 5),
  singular3rdPerson: Word('приударит', 5),
  plural1stPerson: Word('приударим', 5),
  plural2ndPerson: Word('приударите', 5),
  plural3rdPerson: Word('приударят', 5),
  masculinePast: Word('приударил', 5),
  femininePast: Word('приударила', 5),
  neuterPast: Word('приударило', 5),
  pluralPast: Word('приударили', 5),
  imperativeInformal: Word('приударь', 5),
  imperativeFormal: Word('приударьте', 5),
  imperfect: [],
};

perfectVerbs.set(приударить.name.text, приударить);

export { приударить };