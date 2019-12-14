import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпать: PerfectVerb = {
  name: Word('шлёпать', 4),
  singular1stPerson: Word('шлёпаю', 4),
  singular2ndPerson: Word('шлёпаешь', 4),
  singular3rdPerson: Word('шлёпает', 4),
  plural1stPerson: Word('шлёпаем', 4),
  plural2ndPerson: Word('шлёпаете', 4),
  plural3rdPerson: Word('шлёпают', 4),
  masculinePast: Word('шлёпал', 4),
  femininePast: Word('шлёпала', 4),
  neuterPast: Word('шлёпало', 4),
  pluralPast: Word('шлёпали', 4),
  imperativeInformal: Word('шлёпай', 4),
  imperativeFormal: Word('шлёпайте', 4),
  imperfect: [],
};

perfectVerbs.set(шлёпать.name.text, шлёпать);

export { шлёпать };