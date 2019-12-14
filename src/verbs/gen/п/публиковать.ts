import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const публиковать: PerfectVerb = {
  name: Word('публиковать', 8),
  singular1stPerson: Word('публикую', 6),
  singular2ndPerson: Word('публикуешь', 6),
  singular3rdPerson: Word('публикует', 6),
  plural1stPerson: Word('публикуем', 6),
  plural2ndPerson: Word('публикуете', 6),
  plural3rdPerson: Word('публикуют', 6),
  masculinePast: Word('публиковал', 8),
  femininePast: Word('публиковала', 8),
  neuterPast: Word('публиковало', 8),
  pluralPast: Word('публиковали', 8),
  imperativeInformal: Word('публикуй', 6),
  imperativeFormal: Word('публикуйте', 6),
  imperfect: ['опубликовать'],
};

perfectVerbs.set(публиковать.name.text, публиковать);

export { публиковать };