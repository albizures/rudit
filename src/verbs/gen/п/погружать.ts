import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погружать: PerfectVerb = {
  name: Word('погружать', 6),
  singular1stPerson: Word('погружаю', 6),
  singular2ndPerson: Word('погружаешь', 6),
  singular3rdPerson: Word('погружает', 6),
  plural1stPerson: Word('погружаем', 6),
  plural2ndPerson: Word('погружаете', 6),
  plural3rdPerson: Word('погружают', 6),
  masculinePast: Word('погружал', 6),
  femininePast: Word('погружала', 6),
  neuterPast: Word('погружало', 6),
  pluralPast: Word('погружали', 6),
  imperativeInformal: Word('погружай', 6),
  imperativeFormal: Word('погружайте', 6),
  imperfect: [],
};

perfectVerbs.set(погружать.name.text, погружать);

export { погружать };