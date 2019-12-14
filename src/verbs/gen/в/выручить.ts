import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выручить: PerfectVerb = {
  name: Word('выручить', 1),
  singular1stPerson: Word('выручу', 1),
  singular2ndPerson: Word('выручишь', 1),
  singular3rdPerson: Word('выручит', 1),
  plural1stPerson: Word('выручим', 1),
  plural2ndPerson: Word('выручите', 1),
  plural3rdPerson: Word('выручат', 1),
  masculinePast: Word('выручил', 1),
  femininePast: Word('выручила', 1),
  neuterPast: Word('выручило', 1),
  pluralPast: Word('выручили', 1),
  imperativeInformal: Word('выручи', 1),
  imperativeFormal: Word('выручите', 1),
  imperfect: [],
};

perfectVerbs.set(выручить.name.text, выручить);

export { выручить };