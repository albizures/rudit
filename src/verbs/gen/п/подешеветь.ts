import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подешеветь: PerfectVerb = {
  name: Word('подешеветь', 7),
  singular1stPerson: Word('подешевею', 7),
  singular2ndPerson: Word('подешевеешь', 7),
  singular3rdPerson: Word('подешевеет', 7),
  plural1stPerson: Word('подешевеем', 7),
  plural2ndPerson: Word('подешевеете', 7),
  plural3rdPerson: Word('подешевеют', 7),
  masculinePast: Word('подешевел', 7),
  femininePast: Word('подешевела', 7),
  neuterPast: Word('подешевело', 7),
  pluralPast: Word('подешевели', 7),
  imperativeInformal: Word('подешевей', 7),
  imperativeFormal: Word('подешевейте', 7),
  imperfect: [],
};

perfectVerbs.set(подешеветь.name.text, подешеветь);

export { подешеветь };