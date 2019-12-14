import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просыпать: PerfectVerb = {
  name: Word('просыпать', 6),
  singular1stPerson: Word('просыпаю', 6),
  singular2ndPerson: Word('просыпаешь', 6),
  singular3rdPerson: Word('просыпает', 6),
  plural1stPerson: Word('просыпаем', 6),
  plural2ndPerson: Word('просыпаете', 6),
  plural3rdPerson: Word('просыпают', 6),
  masculinePast: Word('просыпал', 6),
  femininePast: Word('просыпала', 6),
  neuterPast: Word('просыпало', 6),
  pluralPast: Word('просыпали', 6),
  imperativeInformal: Word('просыпай', 6),
  imperativeFormal: Word('просыпайте', 6),
  imperfect: [],
};

perfectVerbs.set(просыпать.name.text, просыпать);

export { просыпать };