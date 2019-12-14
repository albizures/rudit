import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпоить: PerfectVerb = {
  name: Word('отпоить', 4),
  singular1stPerson: Word('отпою', 4),
  singular2ndPerson: Word('отпоишь', 3),
  singular3rdPerson: Word('отпоит', 3),
  plural1stPerson: Word('отпоим', 3),
  plural2ndPerson: Word('отпоите', 3),
  plural3rdPerson: Word('отпоят', 3),
  masculinePast: Word('отпоил', 4),
  femininePast: Word('отпоила', 4),
  neuterPast: Word('отпоило', 4),
  pluralPast: Word('отпоили', 4),
  imperativeInformal: Word('отпои', 4),
  imperativeFormal: Word('отпоите', 4),
  imperfect: [],
};

perfectVerbs.set(отпоить.name.text, отпоить);

export { отпоить };