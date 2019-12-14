import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдоветь: PerfectVerb = {
  name: Word('вдоветь', 4),
  singular1stPerson: Word('вдовею', 4),
  singular2ndPerson: Word('вдовеешь', 4),
  singular3rdPerson: Word('вдовеет', 4),
  plural1stPerson: Word('вдовеем', 4),
  plural2ndPerson: Word('вдовеете', 4),
  plural3rdPerson: Word('вдовеют', 4),
  masculinePast: Word('вдовел', 4),
  femininePast: Word('вдовела', 4),
  neuterPast: Word('вдовело', 4),
  pluralPast: Word('вдовели', 4),
  imperativeInformal: Word('вдовей', 4),
  imperativeFormal: Word('вдовейте', 4),
  imperfect: [],
};

perfectVerbs.set(вдоветь.name.text, вдоветь);

export { вдоветь };