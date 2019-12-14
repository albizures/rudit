import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преподносить: PerfectVerb = {
  name: Word('преподносить', 9),
  singular1stPerson: Word('преподношу', 9),
  singular2ndPerson: Word('преподносишь', 7),
  singular3rdPerson: Word('преподносит', 7),
  plural1stPerson: Word('преподносим', 7),
  plural2ndPerson: Word('преподносите', 7),
  plural3rdPerson: Word('преподносят', 7),
  masculinePast: Word('преподносил', 9),
  femininePast: Word('преподносила', 9),
  neuterPast: Word('преподносило', 9),
  pluralPast: Word('преподносили', 9),
  imperativeInformal: Word('преподноси', 9),
  imperativeFormal: Word('преподносите', 9),
  imperfect: [],
};

perfectVerbs.set(преподносить.name.text, преподносить);

export { преподносить };