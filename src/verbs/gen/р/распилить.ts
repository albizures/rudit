import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распилить: PerfectVerb = {
  name: Word('распилить', 6),
  singular1stPerson: Word('распилю', 6),
  singular2ndPerson: Word('распилишь', 4),
  singular3rdPerson: Word('распилит', 4),
  plural1stPerson: Word('распилим', 4),
  plural2ndPerson: Word('распилите', 4),
  plural3rdPerson: Word('распилят', 4),
  masculinePast: Word('распилил', 6),
  femininePast: Word('распилила', 6),
  neuterPast: Word('распилило', 6),
  pluralPast: Word('распилили', 6),
  imperativeInformal: Word('распили', 6),
  imperativeFormal: Word('распилите', 6),
  imperfect: [],
};

perfectVerbs.set(распилить.name.text, распилить);

export { распилить };