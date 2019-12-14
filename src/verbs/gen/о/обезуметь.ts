import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезуметь: PerfectVerb = {
  name: Word('обезуметь', 4),
  singular1stPerson: Word('обезумею', 4),
  singular2ndPerson: Word('обезумеешь', 4),
  singular3rdPerson: Word('обезумеет', 4),
  plural1stPerson: Word('обезумеем', 4),
  plural2ndPerson: Word('обезумеете', 4),
  plural3rdPerson: Word('обезумеют', 4),
  masculinePast: Word('обезумел', 4),
  femininePast: Word('обезумела', 4),
  neuterPast: Word('обезумело', 4),
  pluralPast: Word('обезумели', 4),
  imperativeInformal: Word('обезумей', 4),
  imperativeFormal: Word('обезумейте', 4),
  imperfect: [],
};

perfectVerbs.set(обезуметь.name.text, обезуметь);

export { обезуметь };