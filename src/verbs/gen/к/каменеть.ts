import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const каменеть: PerfectVerb = {
  name: Word('каменеть', 5),
  singular1stPerson: Word('каменею', 5),
  singular2ndPerson: Word('каменеешь', 5),
  singular3rdPerson: Word('каменеет', 5),
  plural1stPerson: Word('каменеем', 5),
  plural2ndPerson: Word('каменеете', 5),
  plural3rdPerson: Word('каменеют', 5),
  masculinePast: Word('каменел', 5),
  femininePast: Word('каменела', 5),
  neuterPast: Word('каменело', 5),
  pluralPast: Word('каменели', 5),
  imperativeInformal: Word('каменей', 5),
  imperativeFormal: Word('каменейте', 5),
  imperfect: [],
};

perfectVerbs.set(каменеть.name.text, каменеть);

export { каменеть };