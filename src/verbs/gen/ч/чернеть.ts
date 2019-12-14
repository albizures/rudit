import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чернеть: PerfectVerb = {
  name: Word('чернеть', 4),
  singular1stPerson: Word('чернею', 4),
  singular2ndPerson: Word('чернеешь', 4),
  singular3rdPerson: Word('чернеет', 4),
  plural1stPerson: Word('чернеем', 4),
  plural2ndPerson: Word('чернеете', 4),
  plural3rdPerson: Word('чернеют', 4),
  masculinePast: Word('чернел', 4),
  femininePast: Word('чернела', 4),
  neuterPast: Word('чернело', 4),
  pluralPast: Word('чернели', 4),
  imperativeInformal: Word('черней', 4),
  imperativeFormal: Word('чернейте', 4),
  imperfect: [],
};

perfectVerbs.set(чернеть.name.text, чернеть);

export { чернеть };