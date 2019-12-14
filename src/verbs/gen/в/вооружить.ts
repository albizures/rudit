import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вооружить: PerfectVerb = {
  name: Word('вооружить', 6),
  singular1stPerson: Word('вооружу', 6),
  singular2ndPerson: Word('вооружишь', 6),
  singular3rdPerson: Word('вооружит', 6),
  plural1stPerson: Word('вооружим', 6),
  plural2ndPerson: Word('вооружите', 6),
  plural3rdPerson: Word('вооружат', 6),
  masculinePast: Word('вооружил', 6),
  femininePast: Word('вооружила', 6),
  neuterPast: Word('вооружило', 6),
  pluralPast: Word('вооружили', 6),
  imperativeInformal: Word('вооружи', 6),
  imperativeFormal: Word('вооружите', 6),
  imperfect: ['вооружать'],
};

perfectVerbs.set(вооружить.name.text, вооружить);

export { вооружить };