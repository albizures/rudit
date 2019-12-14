import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засесть: PerfectVerb = {
  name: Word('засесть', 3),
  singular1stPerson: Word('засяду', 3),
  singular2ndPerson: Word('засядешь', 3),
  singular3rdPerson: Word('засядет', 3),
  plural1stPerson: Word('засядем', 3),
  plural2ndPerson: Word('засядете', 3),
  plural3rdPerson: Word('засядут', 3),
  masculinePast: Word('засел', 3),
  femininePast: Word('засела', 3),
  neuterPast: Word('засело', 3),
  pluralPast: Word('засели', 3),
  imperativeInformal: Word('засядь', 3),
  imperativeFormal: Word('засядьте', 3),
  imperfect: [],
};

perfectVerbs.set(засесть.name.text, засесть);

export { засесть };