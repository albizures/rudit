import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const овдоветь: PerfectVerb = {
  name: Word('овдоветь', 5),
  singular1stPerson: Word('овдовею', 5),
  singular2ndPerson: Word('овдовеешь', 5),
  singular3rdPerson: Word('овдовеет', 5),
  plural1stPerson: Word('овдовеем', 5),
  plural2ndPerson: Word('овдовеете', 5),
  plural3rdPerson: Word('овдовеют', 5),
  masculinePast: Word('овдовел', 5),
  femininePast: Word('овдовела', 5),
  neuterPast: Word('овдовело', 5),
  pluralPast: Word('овдовели', 5),
  imperativeInformal: Word('овдовей', 5),
  imperativeFormal: Word('овдовейте', 5),
  imperfect: [],
};

perfectVerbs.set(овдоветь.name.text, овдоветь);

export { овдоветь };