import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проклинать: PerfectVerb = {
  name: Word('проклинать', 7),
  singular1stPerson: Word('проклинаю', 7),
  singular2ndPerson: Word('проклинаешь', 7),
  singular3rdPerson: Word('проклинает', 7),
  plural1stPerson: Word('проклинаем', 7),
  plural2ndPerson: Word('проклинаете', 7),
  plural3rdPerson: Word('проклинают', 7),
  masculinePast: Word('проклинал', 7),
  femininePast: Word('проклинала', 7),
  neuterPast: Word('проклинало', 7),
  pluralPast: Word('проклинали', 7),
  imperativeInformal: Word('проклинай', 7),
  imperativeFormal: Word('проклинайте', 7),
  imperfect: ['проклясть'],
};

perfectVerbs.set(проклинать.name.text, проклинать);

export { проклинать };