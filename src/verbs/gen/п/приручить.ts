import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приручить: PerfectVerb = {
  name: Word('приручить', 6),
  singular1stPerson: Word('приручу', 6),
  singular2ndPerson: Word('приручишь', 6),
  singular3rdPerson: Word('приручит', 6),
  plural1stPerson: Word('приручим', 6),
  plural2ndPerson: Word('приручите', 6),
  plural3rdPerson: Word('приручат', 6),
  masculinePast: Word('приручил', 6),
  femininePast: Word('приручила', 6),
  neuterPast: Word('приручило', 6),
  pluralPast: Word('приручили', 6),
  imperativeInformal: Word('приручи', 6),
  imperativeFormal: Word('приручите', 6),
  imperfect: [],
};

perfectVerbs.set(приручить.name.text, приручить);

export { приручить };