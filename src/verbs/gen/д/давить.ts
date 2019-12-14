import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const давить: PerfectVerb = {
  name: Word('давить', 3),
  singular1stPerson: Word('давлю', 4),
  singular2ndPerson: Word('давишь', 1),
  singular3rdPerson: Word('давит', 1),
  plural1stPerson: Word('давим', 1),
  plural2ndPerson: Word('давите', 1),
  plural3rdPerson: Word('давят', 1),
  masculinePast: Word('давил', 3),
  femininePast: Word('давила', 3),
  neuterPast: Word('давило', 3),
  pluralPast: Word('давили', 3),
  imperativeInformal: Word('дави', 3),
  imperativeFormal: Word('давите', 3),
  imperfect: [],
};

perfectVerbs.set(давить.name.text, давить);

export { давить };