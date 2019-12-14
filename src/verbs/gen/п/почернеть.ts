import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почернеть: PerfectVerb = {
  name: Word('почернеть', 6),
  singular1stPerson: Word('почернею', 6),
  singular2ndPerson: Word('почернеешь', 6),
  singular3rdPerson: Word('почернеет', 6),
  plural1stPerson: Word('почернеем', 6),
  plural2ndPerson: Word('почернеете', 6),
  plural3rdPerson: Word('почернеют', 6),
  masculinePast: Word('почернел', 6),
  femininePast: Word('почернела', 6),
  neuterPast: Word('почернело', 6),
  pluralPast: Word('почернели', 6),
  imperativeInformal: Word('почерней', 6),
  imperativeFormal: Word('почернейте', 6),
  imperfect: [],
};

perfectVerbs.set(почернеть.name.text, почернеть);

export { почернеть };