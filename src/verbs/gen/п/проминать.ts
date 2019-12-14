import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проминать: PerfectVerb = {
  name: Word('проминать', 6),
  singular1stPerson: Word('проминаю', 6),
  singular2ndPerson: Word('проминаешь', 6),
  singular3rdPerson: Word('проминает', 6),
  plural1stPerson: Word('проминаем', 6),
  plural2ndPerson: Word('проминаете', 6),
  plural3rdPerson: Word('проминают', 6),
  masculinePast: Word('проминал', 6),
  femininePast: Word('проминала', 6),
  neuterPast: Word('проминало', 6),
  pluralPast: Word('проминали', 6),
  imperativeInformal: Word('проминай', 6),
  imperativeFormal: Word('проминайте', 6),
  imperfect: [],
};

perfectVerbs.set(проминать.name.text, проминать);

export { проминать };