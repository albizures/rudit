import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпилить: PerfectVerb = {
  name: Word('отпилить', 5),
  singular1stPerson: Word('отпилю', 5),
  singular2ndPerson: Word('отпилишь', 3),
  singular3rdPerson: Word('отпилит', 3),
  plural1stPerson: Word('отпилим', 3),
  plural2ndPerson: Word('отпилите', 3),
  plural3rdPerson: Word('отпилят', 3),
  masculinePast: Word('отпилил', 5),
  femininePast: Word('отпилила', 5),
  neuterPast: Word('отпилило', 5),
  pluralPast: Word('отпилили', 5),
  imperativeInformal: Word('отпили', 5),
  imperativeFormal: Word('отпилите', 5),
  imperfect: [],
};

perfectVerbs.set(отпилить.name.text, отпилить);

export { отпилить };