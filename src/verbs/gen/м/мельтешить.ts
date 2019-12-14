import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мельтешить: PerfectVerb = {
  name: Word('мельтешить', 7),
  singular1stPerson: Word('мельтешу', 7),
  singular2ndPerson: Word('мельтешишь', 7),
  singular3rdPerson: Word('мельтешит', 7),
  plural1stPerson: Word('мельтешим', 7),
  plural2ndPerson: Word('мельтешите', 7),
  plural3rdPerson: Word('мельтешат', 7),
  masculinePast: Word('мельтешил', 7),
  femininePast: Word('мельтешила', 7),
  neuterPast: Word('мельтешило', 7),
  pluralPast: Word('мельтешили', 7),
  imperativeInformal: Word('мельтеши', 7),
  imperativeFormal: Word('мельтешите', 7),
  imperfect: [],
};

perfectVerbs.set(мельтешить.name.text, мельтешить);

export { мельтешить };