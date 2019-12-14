import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поиметь: PerfectVerb = {
  name: Word('поиметь', 4),
  singular1stPerson: Word('поимею', 4),
  singular2ndPerson: Word('поимеешь', 4),
  singular3rdPerson: Word('поимеет', 4),
  plural1stPerson: Word('поимеем', 4),
  plural2ndPerson: Word('поимеете', 4),
  plural3rdPerson: Word('поимеют', 4),
  masculinePast: Word('поимел', 4),
  femininePast: Word('поимела', 4),
  neuterPast: Word('поимело', 4),
  pluralPast: Word('поимели', 4),
  imperativeInformal: Word('поимей', 4),
  imperativeFormal: Word('поимейте', 4),
  imperfect: [],
};

perfectVerbs.set(поиметь.name.text, поиметь);

export { поиметь };