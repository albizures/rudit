import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const признать: PerfectVerb = {
  name: Word('признать', 5),
  singular1stPerson: Word('признаю', 5),
  singular2ndPerson: Word('признаешь', 5),
  singular3rdPerson: Word('признает', 5),
  plural1stPerson: Word('признаем', 5),
  plural2ndPerson: Word('признаете', 5),
  plural3rdPerson: Word('признают', 5),
  masculinePast: Word('признал', 5),
  femininePast: Word('признала', 5),
  neuterPast: Word('признало', 5),
  pluralPast: Word('признали', 5),
  imperativeInformal: Word('признай', 5),
  imperativeFormal: Word('признайте', 5),
  imperfect: ['признавать'],
};

perfectVerbs.set(признать.name.text, признать);

export { признать };