import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыпать: PerfectVerb = {
  name: Word('сыпать', 3),
  singular1stPerson: Word('сыпаю', 3),
  singular2ndPerson: Word('сыпаешь', 3),
  singular3rdPerson: Word('сыпает', 3),
  plural1stPerson: Word('сыпаем', 3),
  plural2ndPerson: Word('сыпаете', 3),
  plural3rdPerson: Word('сыпают', 3),
  masculinePast: Word('сыпал', 3),
  femininePast: Word('сыпала', 3),
  neuterPast: Word('сыпало', 3),
  pluralPast: Word('сыпали', 3),
  imperativeInformal: Word('сыпай', 3),
  imperativeFormal: Word('сыпайте', 3),
  imperfect: [],
};

perfectVerbs.set(сыпать.name.text, сыпать);

export { сыпать };