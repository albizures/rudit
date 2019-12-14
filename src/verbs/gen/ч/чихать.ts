import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чихать: PerfectVerb = {
  name: Word('чихать', 3),
  singular1stPerson: Word('чихаю', 3),
  singular2ndPerson: Word('чихаешь', 3),
  singular3rdPerson: Word('чихает', 3),
  plural1stPerson: Word('чихаем', 3),
  plural2ndPerson: Word('чихаете', 3),
  plural3rdPerson: Word('чихают', 3),
  masculinePast: Word('чихал', 3),
  femininePast: Word('чихала', 3),
  neuterPast: Word('чихало', 3),
  pluralPast: Word('чихали', 3),
  imperativeInformal: Word('чихай', 3),
  imperativeFormal: Word('чихайте', 3),
  imperfect: ['чихнуть'],
};

perfectVerbs.set(чихать.name.text, чихать);

export { чихать };