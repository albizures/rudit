import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запилить: PerfectVerb = {
  name: Word('запилить', 5),
  singular1stPerson: Word('запилю', 5),
  singular2ndPerson: Word('запилишь', 3),
  singular3rdPerson: Word('запилит', 3),
  plural1stPerson: Word('запилим', 3),
  plural2ndPerson: Word('запилите', 3),
  plural3rdPerson: Word('запилят', 3),
  masculinePast: Word('запилил', 5),
  femininePast: Word('запилила', 5),
  neuterPast: Word('запилило', 5),
  pluralPast: Word('запилили', 5),
  imperativeInformal: Word('запили', 5),
  imperativeFormal: Word('запилите', 5),
  imperfect: [],
};

perfectVerbs.set(запилить.name.text, запилить);

export { запилить };