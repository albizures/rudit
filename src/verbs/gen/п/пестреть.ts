import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пестреть: PerfectVerb = {
  name: Word('пестреть', 5),
  singular1stPerson: Word('пестрею', 5),
  singular2ndPerson: Word('пестреешь', 5),
  singular3rdPerson: Word('пестреет', 5),
  plural1stPerson: Word('пестреем', 5),
  plural2ndPerson: Word('пестреете', 5),
  plural3rdPerson: Word('пестреют', 5),
  masculinePast: Word('пестрел', 5),
  femininePast: Word('пестрела', 5),
  neuterPast: Word('пестрело', 5),
  pluralPast: Word('пестрели', 5),
  imperativeInformal: Word('пестрей', 5),
  imperativeFormal: Word('пестрейте', 5),
  imperfect: [],
};

perfectVerbs.set(пестреть.name.text, пестреть);

export { пестреть };