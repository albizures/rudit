import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проливать: PerfectVerb = {
  name: Word('проливать', 6),
  singular1stPerson: Word('проливаю', 6),
  singular2ndPerson: Word('проливаешь', 6),
  singular3rdPerson: Word('проливает', 6),
  plural1stPerson: Word('проливаем', 6),
  plural2ndPerson: Word('проливаете', 6),
  plural3rdPerson: Word('проливают', 6),
  masculinePast: Word('проливал', 6),
  femininePast: Word('проливала', 6),
  neuterPast: Word('проливало', 6),
  pluralPast: Word('проливали', 6),
  imperativeInformal: Word('проливай', 6),
  imperativeFormal: Word('проливайте', 6),
  imperfect: ['пролить'],
};

perfectVerbs.set(проливать.name.text, проливать);

export { проливать };