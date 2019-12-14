import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пососать: PerfectVerb = {
  name: Word('пососать', 5),
  singular1stPerson: Word('пососу', 5),
  singular2ndPerson: Word('пососёшь', 5),
  singular3rdPerson: Word('пососёт', 5),
  plural1stPerson: Word('пососём', 5),
  plural2ndPerson: Word('пососёте', 5),
  plural3rdPerson: Word('пососут', 5),
  masculinePast: Word('пососал', 5),
  femininePast: Word('пососала', 5),
  neuterPast: Word('пососало', 5),
  pluralPast: Word('пососали', 5),
  imperativeInformal: Word('пососи', 5),
  imperativeFormal: Word('пососите', 5),
  imperfect: [],
};

perfectVerbs.set(пососать.name.text, пососать);

export { пососать };