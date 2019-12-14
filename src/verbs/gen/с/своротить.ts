import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const своротить: PerfectVerb = {
  name: Word('своротить', 6),
  singular1stPerson: Word('сворочу', 6),
  singular2ndPerson: Word('своротишь', 4),
  singular3rdPerson: Word('своротит', 4),
  plural1stPerson: Word('своротим', 4),
  plural2ndPerson: Word('своротите', 4),
  plural3rdPerson: Word('своротят', 4),
  masculinePast: Word('своротил', 6),
  femininePast: Word('своротила', 6),
  neuterPast: Word('своротило', 6),
  pluralPast: Word('своротили', 6),
  imperativeInformal: Word('свороти', 6),
  imperativeFormal: Word('своротите', 6),
  imperfect: [],
};

perfectVerbs.set(своротить.name.text, своротить);

export { своротить };