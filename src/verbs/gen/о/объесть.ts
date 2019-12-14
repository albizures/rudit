import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объесть: PerfectVerb = {
  name: Word('объесть', 3),
  singular1stPerson: Word('объем', 3),
  singular2ndPerson: Word('объешь', 3),
  singular3rdPerson: Word('объест', 3),
  plural1stPerson: Word('объедим', 5),
  plural2ndPerson: Word('объедите', 5),
  plural3rdPerson: Word('объедят', 5),
  masculinePast: Word('объел', 3),
  femininePast: Word('объела', 3),
  neuterPast: Word('объело', 3),
  pluralPast: Word('объели', 3),
  imperativeInformal: Word('объешь', 3),
  imperativeFormal: Word('объешьте', 3),
  imperfect: [],
};

perfectVerbs.set(объесть.name.text, объесть);

export { объесть };