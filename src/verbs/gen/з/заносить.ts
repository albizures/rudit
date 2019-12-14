import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заносить: PerfectVerb = {
  name: Word('заносить', 5),
  singular1stPerson: Word('заношу', 5),
  singular2ndPerson: Word('заносишь', 3),
  singular3rdPerson: Word('заносит', 3),
  plural1stPerson: Word('заносим', 3),
  plural2ndPerson: Word('заносите', 3),
  plural3rdPerson: Word('заносят', 3),
  masculinePast: Word('заносил', 5),
  femininePast: Word('заносила', 5),
  neuterPast: Word('заносило', 5),
  pluralPast: Word('заносили', 5),
  imperativeInformal: Word('заноси', 5),
  imperativeFormal: Word('заносите', 5),
  imperfect: [],
};

perfectVerbs.set(заносить.name.text, заносить);

export { заносить };