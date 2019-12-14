import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привносить: PerfectVerb = {
  name: Word('привносить', 7),
  singular1stPerson: Word('привношу', 7),
  singular2ndPerson: Word('привносишь', 5),
  singular3rdPerson: Word('привносит', 5),
  plural1stPerson: Word('привносим', 5),
  plural2ndPerson: Word('привносите', 5),
  plural3rdPerson: Word('привносят', 5),
  masculinePast: Word('привносил', 7),
  femininePast: Word('привносила', 7),
  neuterPast: Word('привносило', 7),
  pluralPast: Word('привносили', 7),
  imperativeInformal: Word('привноси', 7),
  imperativeFormal: Word('привносите', 7),
  imperfect: [],
};

perfectVerbs.set(привносить.name.text, привносить);

export { привносить };