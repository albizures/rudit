import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпилить: PerfectVerb = {
  name: Word('выпилить', 1),
  singular1stPerson: Word('выпилю', 1),
  singular2ndPerson: Word('выпилишь', 1),
  singular3rdPerson: Word('выпилит', 1),
  plural1stPerson: Word('выпилим', 1),
  plural2ndPerson: Word('выпилите', 1),
  plural3rdPerson: Word('выпилят', 1),
  masculinePast: Word('выпилил', 1),
  femininePast: Word('выпилила', 1),
  neuterPast: Word('выпилило', 1),
  pluralPast: Word('выпилили', 1),
  imperativeInformal: Word('выпили', 1),
  imperativeFormal: Word('выпилите', 1),
  imperfect: [],
};

perfectVerbs.set(выпилить.name.text, выпилить);

export { выпилить };