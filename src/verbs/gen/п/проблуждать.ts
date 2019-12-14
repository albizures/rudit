import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проблуждать: PerfectVerb = {
  name: Word('проблуждать', 8),
  singular1stPerson: Word('проблуждаю', 8),
  singular2ndPerson: Word('проблуждаешь', 8),
  singular3rdPerson: Word('проблуждает', 8),
  plural1stPerson: Word('проблуждаем', 8),
  plural2ndPerson: Word('проблуждаете', 8),
  plural3rdPerson: Word('проблуждают', 8),
  masculinePast: Word('проблуждал', 8),
  femininePast: Word('проблуждала', 8),
  neuterPast: Word('проблуждало', 8),
  pluralPast: Word('проблуждали', 8),
  imperativeInformal: Word('проблуждай', 8),
  imperativeFormal: Word('проблуждайте', 8),
  imperfect: [],
};

perfectVerbs.set(проблуждать.name.text, проблуждать);

export { проблуждать };