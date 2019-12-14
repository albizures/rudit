import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссыпать: PerfectVerb = {
  name: Word('ссыпать', 4),
  singular1stPerson: Word('ссыпаю', 4),
  singular2ndPerson: Word('ссыпаешь', 4),
  singular3rdPerson: Word('ссыпает', 4),
  plural1stPerson: Word('ссыпаем', 4),
  plural2ndPerson: Word('ссыпаете', 4),
  plural3rdPerson: Word('ссыпают', 4),
  masculinePast: Word('ссыпал', 4),
  femininePast: Word('ссыпала', 4),
  neuterPast: Word('ссыпало', 4),
  pluralPast: Word('ссыпали', 4),
  imperativeInformal: Word('ссыпай', 4),
  imperativeFormal: Word('ссыпайте', 4),
  imperfect: [],
};

perfectVerbs.set(ссыпать.name.text, ссыпать);

export { ссыпать };