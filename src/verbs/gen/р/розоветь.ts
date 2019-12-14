import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const розоветь: PerfectVerb = {
  name: Word('розоветь', 5),
  singular1stPerson: Word('розовею', 5),
  singular2ndPerson: Word('розовеешь', 5),
  singular3rdPerson: Word('розовеет', 5),
  plural1stPerson: Word('розовеем', 5),
  plural2ndPerson: Word('розовеете', 5),
  plural3rdPerson: Word('розовеют', 5),
  masculinePast: Word('розовел', 5),
  femininePast: Word('розовела', 5),
  neuterPast: Word('розовело', 5),
  pluralPast: Word('розовели', 5),
  imperativeInformal: Word('розовей', 5),
  imperativeFormal: Word('розовейте', 5),
  imperfect: [],
};

perfectVerbs.set(розоветь.name.text, розоветь);

export { розоветь };