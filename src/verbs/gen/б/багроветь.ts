import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const багроветь: PerfectVerb = {
  name: Word('багроветь', 6),
  singular1stPerson: Word('багровею', 6),
  singular2ndPerson: Word('багровеешь', 6),
  singular3rdPerson: Word('багровеет', 6),
  plural1stPerson: Word('багровеем', 6),
  plural2ndPerson: Word('багровеете', 6),
  plural3rdPerson: Word('багровеют', 6),
  masculinePast: Word('багровел', 6),
  femininePast: Word('багровела', 6),
  neuterPast: Word('багровело', 6),
  pluralPast: Word('багровели', 6),
  imperativeInformal: Word('багровей', 6),
  imperativeFormal: Word('багровейте', 6),
  imperfect: [],
};

perfectVerbs.set(багроветь.name.text, багроветь);

export { багроветь };