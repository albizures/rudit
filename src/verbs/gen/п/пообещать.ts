import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пообещать: PerfectVerb = {
  name: Word('пообещать', 6),
  singular1stPerson: Word('пообещаю', 6),
  singular2ndPerson: Word('пообещаешь', 6),
  singular3rdPerson: Word('пообещает', 6),
  plural1stPerson: Word('пообещаем', 6),
  plural2ndPerson: Word('пообещаете', 6),
  plural3rdPerson: Word('пообещают', 6),
  masculinePast: Word('пообещал', 6),
  femininePast: Word('пообещала', 6),
  neuterPast: Word('пообещало', 6),
  pluralPast: Word('пообещали', 6),
  imperativeInformal: Word('пообещай', 6),
  imperativeFormal: Word('пообещайте', 6),
  imperfect: ['обещать'],
};

perfectVerbs.set(пообещать.name.text, пообещать);

export { пообещать };