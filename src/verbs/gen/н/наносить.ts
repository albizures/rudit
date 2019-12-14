import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наносить: PerfectVerb = {
  name: Word('наносить', 5),
  singular1stPerson: Word('наношу', 5),
  singular2ndPerson: Word('наносишь', 3),
  singular3rdPerson: Word('наносит', 3),
  plural1stPerson: Word('наносим', 3),
  plural2ndPerson: Word('наносите', 3),
  plural3rdPerson: Word('наносят', 3),
  masculinePast: Word('наносил', 5),
  femininePast: Word('наносила', 5),
  neuterPast: Word('наносило', 5),
  pluralPast: Word('наносили', 5),
  imperativeInformal: Word('наноси', 5),
  imperativeFormal: Word('наносите', 5),
  imperfect: [],
};

perfectVerbs.set(наносить.name.text, наносить);

export { наносить };