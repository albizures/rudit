import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забурлить: PerfectVerb = {
  name: Word('забурлить', 6),
  singular1stPerson: Word('забурлю', 6),
  singular2ndPerson: Word('забурлишь', 6),
  singular3rdPerson: Word('забурлит', 6),
  plural1stPerson: Word('забурлим', 6),
  plural2ndPerson: Word('забурлите', 6),
  plural3rdPerson: Word('забурлят', 6),
  masculinePast: Word('забурлил', 6),
  femininePast: Word('забурлила', 6),
  neuterPast: Word('забурлило', 6),
  pluralPast: Word('забурлили', 6),
  imperativeInformal: Word('забурли', 6),
  imperativeFormal: Word('забурлите', 6),
  imperfect: [],
};

perfectVerbs.set(забурлить.name.text, забурлить);

export { забурлить };