import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превозносить: PerfectVerb = {
  name: Word('превозносить', 9),
  singular1stPerson: Word('превозношу', 9),
  singular2ndPerson: Word('превозносишь', 7),
  singular3rdPerson: Word('превозносит', 7),
  plural1stPerson: Word('превозносим', 7),
  plural2ndPerson: Word('превозносите', 7),
  plural3rdPerson: Word('превозносят', 7),
  masculinePast: Word('превозносил', 9),
  femininePast: Word('превозносила', 9),
  neuterPast: Word('превозносило', 9),
  pluralPast: Word('превозносили', 9),
  imperativeInformal: Word('превозноси', 9),
  imperativeFormal: Word('превозносите', 9),
  imperfect: [],
};

perfectVerbs.set(превозносить.name.text, превозносить);

export { превозносить };