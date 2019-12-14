import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подносить: PerfectVerb = {
  name: Word('подносить', 6),
  singular1stPerson: Word('подношу', 6),
  singular2ndPerson: Word('подносишь', 4),
  singular3rdPerson: Word('подносит', 4),
  plural1stPerson: Word('подносим', 4),
  plural2ndPerson: Word('подносите', 4),
  plural3rdPerson: Word('подносят', 4),
  masculinePast: Word('подносил', 6),
  femininePast: Word('подносила', 6),
  neuterPast: Word('подносило', 6),
  pluralPast: Word('подносили', 6),
  imperativeInformal: Word('подноси', 6),
  imperativeFormal: Word('подносите', 6),
  imperfect: [],
};

perfectVerbs.set(подносить.name.text, подносить);

export { подносить };