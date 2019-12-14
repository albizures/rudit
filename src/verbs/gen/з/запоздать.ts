import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запоздать: PerfectVerb = {
  name: Word('запоздать', 6),
  singular1stPerson: Word('запоздаю', 6),
  singular2ndPerson: Word('запоздаешь', 6),
  singular3rdPerson: Word('запоздает', 6),
  plural1stPerson: Word('запоздаем', 6),
  plural2ndPerson: Word('запоздаете', 6),
  plural3rdPerson: Word('запоздают', 6),
  masculinePast: Word('запоздал', 6),
  femininePast: Word('запоздала', 6),
  neuterPast: Word('запоздало', 6),
  pluralPast: Word('запоздали', 6),
  imperativeInformal: Word('запоздай', 6),
  imperativeFormal: Word('запоздайте', 6),
  imperfect: [],
};

perfectVerbs.set(запоздать.name.text, запоздать);

export { запоздать };