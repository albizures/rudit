import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доносить: PerfectVerb = {
  name: Word('доносить', 5),
  singular1stPerson: Word('доношу', 5),
  singular2ndPerson: Word('доносишь', 3),
  singular3rdPerson: Word('доносит', 3),
  plural1stPerson: Word('доносим', 3),
  plural2ndPerson: Word('доносите', 3),
  plural3rdPerson: Word('доносят', 3),
  masculinePast: Word('доносил', 5),
  femininePast: Word('доносила', 5),
  neuterPast: Word('доносило', 5),
  pluralPast: Word('доносили', 5),
  imperativeInformal: Word('доноси', 5),
  imperativeFormal: Word('доносите', 5),
  imperfect: ['донести'],
};

perfectVerbs.set(доносить.name.text, доносить);

export { доносить };