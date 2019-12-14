import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригреть: PerfectVerb = {
  name: Word('пригреть', 5),
  singular1stPerson: Word('пригрею', 5),
  singular2ndPerson: Word('пригреешь', 5),
  singular3rdPerson: Word('пригреет', 5),
  plural1stPerson: Word('пригреем', 5),
  plural2ndPerson: Word('пригреете', 5),
  plural3rdPerson: Word('пригреют', 5),
  masculinePast: Word('пригрел', 5),
  femininePast: Word('пригрела', 5),
  neuterPast: Word('пригрело', 5),
  pluralPast: Word('пригрели', 5),
  imperativeInformal: Word('пригрей', 5),
  imperativeFormal: Word('пригрейте', 5),
  imperfect: [],
};

perfectVerbs.set(пригреть.name.text, пригреть);

export { пригреть };