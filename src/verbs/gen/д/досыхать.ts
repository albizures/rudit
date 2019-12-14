import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досыхать: PerfectVerb = {
  name: Word('досыхать', 5),
  singular1stPerson: Word('досыхаю', 5),
  singular2ndPerson: Word('досыхаешь', 5),
  singular3rdPerson: Word('досыхает', 5),
  plural1stPerson: Word('досыхаем', 5),
  plural2ndPerson: Word('досыхаете', 5),
  plural3rdPerson: Word('досыхают', 5),
  masculinePast: Word('досыхал', 5),
  femininePast: Word('досыхала', 5),
  neuterPast: Word('досыхало', 5),
  pluralPast: Word('досыхали', 5),
  imperativeInformal: Word('досыхай', 5),
  imperativeFormal: Word('досыхайте', 5),
  imperfect: [],
};

perfectVerbs.set(досыхать.name.text, досыхать);

export { досыхать };