import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бурлить: PerfectVerb = {
  name: Word('бурлить', 4),
  singular1stPerson: Word('бурлю', 4),
  singular2ndPerson: Word('бурлишь', 4),
  singular3rdPerson: Word('бурлит', 4),
  plural1stPerson: Word('бурлим', 4),
  plural2ndPerson: Word('бурлите', 4),
  plural3rdPerson: Word('бурлят', 4),
  masculinePast: Word('бурлил', 4),
  femininePast: Word('бурлила', 4),
  neuterPast: Word('бурлило', 4),
  pluralPast: Word('бурлили', 4),
  imperativeInformal: Word('бурли', 4),
  imperativeFormal: Word('бурлите', 4),
  imperfect: [],
};

perfectVerbs.set(бурлить.name.text, бурлить);

export { бурлить };