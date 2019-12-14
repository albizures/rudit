import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагружать: PerfectVerb = {
  name: Word('нагружать', 6),
  singular1stPerson: Word('нагружаю', 6),
  singular2ndPerson: Word('нагружаешь', 6),
  singular3rdPerson: Word('нагружает', 6),
  plural1stPerson: Word('нагружаем', 6),
  plural2ndPerson: Word('нагружаете', 6),
  plural3rdPerson: Word('нагружают', 6),
  masculinePast: Word('нагружал', 6),
  femininePast: Word('нагружала', 6),
  neuterPast: Word('нагружало', 6),
  pluralPast: Word('нагружали', 6),
  imperativeInformal: Word('нагружай', 6),
  imperativeFormal: Word('нагружайте', 6),
  imperfect: [],
};

perfectVerbs.set(нагружать.name.text, нагружать);

export { нагружать };