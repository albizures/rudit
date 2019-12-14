import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прислать: PerfectVerb = {
  name: Word('прислать', 5),
  singular1stPerson: Word('пришлю', 5),
  singular2ndPerson: Word('пришлёшь', 5),
  singular3rdPerson: Word('пришлёт', 5),
  plural1stPerson: Word('пришлём', 5),
  plural2ndPerson: Word('пришлёте', 5),
  plural3rdPerson: Word('пришлют', 5),
  masculinePast: Word('прислал', 5),
  femininePast: Word('прислала', 5),
  neuterPast: Word('прислало', 5),
  pluralPast: Word('прислали', 5),
  imperativeInformal: Word('пришли', 5),
  imperativeFormal: Word('пришлите', 5),
  imperfect: ['присылать','слать'],
};

perfectVerbs.set(прислать.name.text, прислать);

export { прислать };