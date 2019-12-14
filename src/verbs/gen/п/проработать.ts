import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проработать: PerfectVerb = {
  name: Word('проработать', 6),
  singular1stPerson: Word('проработаю', 6),
  singular2ndPerson: Word('проработаешь', 6),
  singular3rdPerson: Word('проработает', 6),
  plural1stPerson: Word('проработаем', 6),
  plural2ndPerson: Word('проработаете', 6),
  plural3rdPerson: Word('проработают', 6),
  masculinePast: Word('проработал', 6),
  femininePast: Word('проработала', 6),
  neuterPast: Word('проработало', 6),
  pluralPast: Word('проработали', 6),
  imperativeInformal: Word('проработай', 6),
  imperativeFormal: Word('проработайте', 6),
  imperfect: [],
};

perfectVerbs.set(проработать.name.text, проработать);

export { проработать };