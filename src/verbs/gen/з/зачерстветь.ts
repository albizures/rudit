import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачерстветь: PerfectVerb = {
  name: Word('зачерстветь', 8),
  singular1stPerson: Word('зачерствею', 8),
  singular2ndPerson: Word('зачерствеешь', 8),
  singular3rdPerson: Word('зачерствеет', 8),
  plural1stPerson: Word('зачерствеем', 8),
  plural2ndPerson: Word('зачерствеете', 8),
  plural3rdPerson: Word('зачерствеют', 8),
  masculinePast: Word('зачерствел', 8),
  femininePast: Word('зачерствела', 8),
  neuterPast: Word('зачерствело', 8),
  pluralPast: Word('зачерствели', 8),
  imperativeInformal: Word('зачерствей', 8),
  imperativeFormal: Word('зачерствейте', 8),
  imperfect: [],
};

perfectVerbs.set(зачерстветь.name.text, зачерстветь);

export { зачерстветь };