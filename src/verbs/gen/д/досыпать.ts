import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досыпать: PerfectVerb = {
  name: Word('досыпать', 5),
  singular1stPerson: Word('досыпаю', 5),
  singular2ndPerson: Word('досыпаешь', 5),
  singular3rdPerson: Word('досыпает', 5),
  plural1stPerson: Word('досыпаем', 5),
  plural2ndPerson: Word('досыпаете', 5),
  plural3rdPerson: Word('досыпают', 5),
  masculinePast: Word('досыпал', 5),
  femininePast: Word('досыпала', 5),
  neuterPast: Word('досыпало', 5),
  pluralPast: Word('досыпали', 5),
  imperativeInformal: Word('досыпай', 5),
  imperativeFormal: Word('досыпайте', 5),
  imperfect: [],
};

perfectVerbs.set(досыпать.name.text, досыпать);

export { досыпать };