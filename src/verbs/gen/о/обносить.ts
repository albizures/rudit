import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обносить: PerfectVerb = {
  name: Word('обносить', 5),
  singular1stPerson: Word('обношу', 5),
  singular2ndPerson: Word('обносишь', 3),
  singular3rdPerson: Word('обносит', 3),
  plural1stPerson: Word('обносим', 3),
  plural2ndPerson: Word('обносите', 3),
  plural3rdPerson: Word('обносят', 3),
  masculinePast: Word('обносил', 5),
  femininePast: Word('обносила', 5),
  neuterPast: Word('обносило', 5),
  pluralPast: Word('обносили', 5),
  imperativeInformal: Word('обноси', 5),
  imperativeFormal: Word('обносите', 5),
  imperfect: [],
};

perfectVerbs.set(обносить.name.text, обносить);

export { обносить };