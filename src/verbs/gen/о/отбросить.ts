import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбросить: PerfectVerb = {
  name: Word('отбросить', 4),
  singular1stPerson: Word('отброшу', 4),
  singular2ndPerson: Word('отбросишь', 4),
  singular3rdPerson: Word('отбросит', 4),
  plural1stPerson: Word('отбросим', 4),
  plural2ndPerson: Word('отбросите', 4),
  plural3rdPerson: Word('отбросят', 4),
  masculinePast: Word('отбросил', 4),
  femininePast: Word('отбросила', 4),
  neuterPast: Word('отбросило', 4),
  pluralPast: Word('отбросили', 4),
  imperativeInformal: Word('отбрось', 4),
  imperativeFormal: Word('отбросьте', 4),
  imperfect: [],
};

perfectVerbs.set(отбросить.name.text, отбросить);

export { отбросить };