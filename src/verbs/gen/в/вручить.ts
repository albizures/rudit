import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вручить: PerfectVerb = {
  name: Word('вручить', 4),
  singular1stPerson: Word('вручу', 4),
  singular2ndPerson: Word('вручишь', 4),
  singular3rdPerson: Word('вручит', 4),
  plural1stPerson: Word('вручим', 4),
  plural2ndPerson: Word('вручите', 4),
  plural3rdPerson: Word('вручат', 4),
  masculinePast: Word('вручил', 4),
  femininePast: Word('вручила', 4),
  neuterPast: Word('вручило', 4),
  pluralPast: Word('вручили', 4),
  imperativeInformal: Word('вручи', 4),
  imperativeFormal: Word('вручите', 4),
  imperfect: [],
};

perfectVerbs.set(вручить.name.text, вручить);

export { вручить };