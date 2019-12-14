import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const черстветь: PerfectVerb = {
  name: Word('черстветь', 6),
  singular1stPerson: Word('черствею', 6),
  singular2ndPerson: Word('черствеешь', 6),
  singular3rdPerson: Word('черствеет', 6),
  plural1stPerson: Word('черствеем', 6),
  plural2ndPerson: Word('черствеете', 6),
  plural3rdPerson: Word('черствеют', 6),
  masculinePast: Word('черствел', 6),
  femininePast: Word('черствела', 6),
  neuterPast: Word('черствело', 6),
  pluralPast: Word('черствели', 6),
  imperativeInformal: Word('черствей', 6),
  imperativeFormal: Word('черствейте', 6),
  imperfect: [],
};

perfectVerbs.set(черстветь.name.text, черстветь);

export { черстветь };