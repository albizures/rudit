import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарабатывать: PerfectVerb = {
  name: Word('зарабатывать', 5),
  singular1stPerson: Word('зарабатываю', 5),
  singular2ndPerson: Word('зарабатываешь', 5),
  singular3rdPerson: Word('зарабатывает', 5),
  plural1stPerson: Word('зарабатываем', 5),
  plural2ndPerson: Word('зарабатываете', 5),
  plural3rdPerson: Word('зарабатывают', 5),
  masculinePast: Word('зарабатывал', 5),
  femininePast: Word('зарабатывала', 5),
  neuterPast: Word('зарабатывало', 5),
  pluralPast: Word('зарабатывали', 5),
  imperativeInformal: Word('зарабатывай', 5),
  imperativeFormal: Word('зарабатывайте', 5),
  imperfect: ['заработать'],
};

perfectVerbs.set(зарабатывать.name.text, зарабатывать);

export { зарабатывать };