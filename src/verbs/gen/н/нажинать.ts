import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажинать: PerfectVerb = {
  name: Word('нажинать', 5),
  singular1stPerson: Word('нажинаю', 5),
  singular2ndPerson: Word('нажинаешь', 5),
  singular3rdPerson: Word('нажинает', 5),
  plural1stPerson: Word('нажинаем', 5),
  plural2ndPerson: Word('нажинаете', 5),
  plural3rdPerson: Word('нажинают', 5),
  masculinePast: Word('нажинал', 5),
  femininePast: Word('нажинала', 5),
  neuterPast: Word('нажинало', 5),
  pluralPast: Word('нажинали', 5),
  imperativeInformal: Word('нажинай', 5),
  imperativeFormal: Word('нажинайте', 5),
  imperfect: [],
};

perfectVerbs.set(нажинать.name.text, нажинать);

export { нажинать };