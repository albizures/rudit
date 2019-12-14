import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стоить: PerfectVerb = {
  name: Word('стоить', 2),
  singular1stPerson: Word('стою', 2),
  singular2ndPerson: Word('стоишь', 2),
  singular3rdPerson: Word('стоит', 2),
  plural1stPerson: Word('стоим', 2),
  plural2ndPerson: Word('стоите', 2),
  plural3rdPerson: Word('стоят', 2),
  masculinePast: Word('стоил', 2),
  femininePast: Word('стоила', 2),
  neuterPast: Word('стоило', 2),
  pluralPast: Word('стоили', 2),
  imperativeInformal: Word('стой', 2),
  imperativeFormal: Word('стойте', 2),
  imperfect: [],
};

perfectVerbs.set(стоить.name.text, стоить);

export { стоить };