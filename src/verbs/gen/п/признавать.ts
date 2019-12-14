import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const признавать: PerfectVerb = {
  name: Word('признавать', 7),
  singular1stPerson: Word('признаю', 6),
  singular2ndPerson: Word('признаёшь', 6),
  singular3rdPerson: Word('признаёт', 6),
  plural1stPerson: Word('признаём', 6),
  plural2ndPerson: Word('признаёте', 6),
  plural3rdPerson: Word('признают', 6),
  masculinePast: Word('признавал', 7),
  femininePast: Word('признавала', 7),
  neuterPast: Word('признавало', 7),
  pluralPast: Word('признавали', 7),
  imperativeInformal: Word('признавай', 7),
  imperativeFormal: Word('признавайте', 7),
  imperfect: ['признать'],
};

perfectVerbs.set(признавать.name.text, признавать);

export { признавать };