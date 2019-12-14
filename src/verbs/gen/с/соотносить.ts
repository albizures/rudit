import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соотносить: PerfectVerb = {
  name: Word('соотносить', 7),
  singular1stPerson: Word('соотношу', 7),
  singular2ndPerson: Word('соотносишь', 5),
  singular3rdPerson: Word('соотносит', 5),
  plural1stPerson: Word('соотносим', 5),
  plural2ndPerson: Word('соотносите', 5),
  plural3rdPerson: Word('соотносят', 5),
  masculinePast: Word('соотносил', 7),
  femininePast: Word('соотносила', 7),
  neuterPast: Word('соотносило', 7),
  pluralPast: Word('соотносили', 7),
  imperativeInformal: Word('соотноси', 7),
  imperativeFormal: Word('соотносите', 7),
  imperfect: [],
};

perfectVerbs.set(соотносить.name.text, соотносить);

export { соотносить };