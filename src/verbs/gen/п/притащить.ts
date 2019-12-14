import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притащить: PerfectVerb = {
  name: Word('притащить', 6),
  singular1stPerson: Word('притащу', 6),
  singular2ndPerson: Word('притащишь', 4),
  singular3rdPerson: Word('притащит', 4),
  plural1stPerson: Word('притащим', 4),
  plural2ndPerson: Word('притащите', 4),
  plural3rdPerson: Word('притащат', 4),
  masculinePast: Word('притащил', 6),
  femininePast: Word('притащила', 6),
  neuterPast: Word('притащило', 6),
  pluralPast: Word('притащили', 6),
  imperativeInformal: Word('притащи', 6),
  imperativeFormal: Word('притащите', 6),
  imperfect: [],
};

perfectVerbs.set(притащить.name.text, притащить);

export { притащить };