import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const неметь: PerfectVerb = {
  name: Word('неметь', 3),
  singular1stPerson: Word('немею', 3),
  singular2ndPerson: Word('немеешь', 3),
  singular3rdPerson: Word('немеет', 3),
  plural1stPerson: Word('немеем', 3),
  plural2ndPerson: Word('немеете', 3),
  plural3rdPerson: Word('немеют', 3),
  masculinePast: Word('немел', 3),
  femininePast: Word('немела', 3),
  neuterPast: Word('немело', 3),
  pluralPast: Word('немели', 3),
  imperativeInformal: Word('немей', 3),
  imperativeFormal: Word('немейте', 3),
  imperfect: [],
};

perfectVerbs.set(неметь.name.text, неметь);

export { неметь };