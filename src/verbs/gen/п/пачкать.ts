import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пачкать: PerfectVerb = {
  name: Word('пачкать', 1),
  singular1stPerson: Word('пачкаю', 1),
  singular2ndPerson: Word('пачкаешь', 1),
  singular3rdPerson: Word('пачкает', 1),
  plural1stPerson: Word('пачкаем', 1),
  plural2ndPerson: Word('пачкаете', 1),
  plural3rdPerson: Word('пачкают', 1),
  masculinePast: Word('пачкал', 1),
  femininePast: Word('пачкала', 1),
  neuterPast: Word('пачкало', 1),
  pluralPast: Word('пачкали', 1),
  imperativeInformal: Word('пачкай', 1),
  imperativeFormal: Word('пачкайте', 1),
  imperfect: ['испачкать','запачкать'],
};

perfectVerbs.set(пачкать.name.text, пачкать);

export { пачкать };