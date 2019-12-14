import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсыреть: PerfectVerb = {
  name: Word('отсыреть', 5),
  singular1stPerson: Word('отсырею', 5),
  singular2ndPerson: Word('отсыреешь', 5),
  singular3rdPerson: Word('отсыреет', 5),
  plural1stPerson: Word('отсыреем', 5),
  plural2ndPerson: Word('отсыреете', 5),
  plural3rdPerson: Word('отсыреют', 5),
  masculinePast: Word('отсырел', 5),
  femininePast: Word('отсырела', 5),
  neuterPast: Word('отсырело', 5),
  pluralPast: Word('отсырели', 5),
  imperativeInformal: Word('отсырей', 5),
  imperativeFormal: Word('отсырейте', 5),
  imperfect: [],
};

perfectVerbs.set(отсыреть.name.text, отсыреть);

export { отсыреть };