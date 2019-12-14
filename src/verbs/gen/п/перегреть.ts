import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегреть: PerfectVerb = {
  name: Word('перегреть', 6),
  singular1stPerson: Word('перегрею', 6),
  singular2ndPerson: Word('перегреешь', 6),
  singular3rdPerson: Word('перегреет', 6),
  plural1stPerson: Word('перегреем', 6),
  plural2ndPerson: Word('перегреете', 6),
  plural3rdPerson: Word('перегреют', 6),
  masculinePast: Word('перегрел', 6),
  femininePast: Word('перегрела', 6),
  neuterPast: Word('перегрело', 6),
  pluralPast: Word('перегрели', 6),
  imperativeInformal: Word('перегрей', 6),
  imperativeFormal: Word('перегрейте', 6),
  imperfect: [],
};

perfectVerbs.set(перегреть.name.text, перегреть);

export { перегреть };