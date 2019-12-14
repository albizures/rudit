import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const онеметь: PerfectVerb = {
  name: Word('онеметь', 4),
  singular1stPerson: Word('онемею', 4),
  singular2ndPerson: Word('онемеешь', 4),
  singular3rdPerson: Word('онемеет', 4),
  plural1stPerson: Word('онемеем', 4),
  plural2ndPerson: Word('онемеете', 4),
  plural3rdPerson: Word('онемеют', 4),
  masculinePast: Word('онемел', 4),
  femininePast: Word('онемела', 4),
  neuterPast: Word('онемело', 4),
  pluralPast: Word('онемели', 4),
  imperativeInformal: Word('онемей', 4),
  imperativeFormal: Word('онемейте', 4),
  imperfect: [],
};

perfectVerbs.set(онеметь.name.text, онеметь);

export { онеметь };