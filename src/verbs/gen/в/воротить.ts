import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воротить: PerfectVerb = {
  name: Word('воротить', 5),
  singular1stPerson: Word('ворочу', 5),
  singular2ndPerson: Word('воротишь', 3),
  singular3rdPerson: Word('воротит', 3),
  plural1stPerson: Word('воротим', 3),
  plural2ndPerson: Word('воротите', 3),
  plural3rdPerson: Word('воротят', 3),
  masculinePast: Word('воротил', 5),
  femininePast: Word('воротила', 5),
  neuterPast: Word('воротило', 5),
  pluralPast: Word('воротили', 5),
  imperativeInformal: Word('вороти', 5),
  imperativeFormal: Word('воротите', 5),
  imperfect: [],
};

perfectVerbs.set(воротить.name.text, воротить);

export { воротить };