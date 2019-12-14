import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притормозить: PerfectVerb = {
  name: Word('притормозить', 9),
  singular1stPerson: Word('приторможу', 9),
  singular2ndPerson: Word('притормозишь', 9),
  singular3rdPerson: Word('притормозит', 9),
  plural1stPerson: Word('притормозим', 9),
  plural2ndPerson: Word('притормозите', 9),
  plural3rdPerson: Word('притормозят', 9),
  masculinePast: Word('притормозил', 9),
  femininePast: Word('притормозила', 9),
  neuterPast: Word('притормозило', 9),
  pluralPast: Word('притормозили', 9),
  imperativeInformal: Word('притормози', 9),
  imperativeFormal: Word('притормозите', 9),
  imperfect: [],
};

perfectVerbs.set(притормозить.name.text, притормозить);

export { притормозить };