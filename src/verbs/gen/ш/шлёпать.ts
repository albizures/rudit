import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шлёпать: PerfectVerb = {
  name: Word('шлёпать', 2),
  singular1stPerson: Word('шлёпаю', 2),
  singular2ndPerson: Word('шлёпаешь', 2),
  singular3rdPerson: Word('шлёпает', 2),
  plural1stPerson: Word('шлёпаем', 2),
  plural2ndPerson: Word('шлёпаете', 2),
  plural3rdPerson: Word('шлёпают', 2),
  masculinePast: Word('шлёпал', 2),
  femininePast: Word('шлёпала', 2),
  neuterPast: Word('шлёпало', 2),
  pluralPast: Word('шлёпали', 2),
  imperativeInformal: Word('шлёпай', 2),
  imperativeFormal: Word('шлёпайте', 2),
  imperfect: [],
};

perfectVerbs.set(шлёпать.name.text, шлёпать);

export { шлёпать };