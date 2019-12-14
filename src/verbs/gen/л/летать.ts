import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const летать: PerfectVerb = {
  name: Word('летать', 3),
  singular1stPerson: Word('летаю', 3),
  singular2ndPerson: Word('летаешь', 3),
  singular3rdPerson: Word('летает', 3),
  plural1stPerson: Word('летаем', 3),
  plural2ndPerson: Word('летаете', 3),
  plural3rdPerson: Word('летают', 3),
  masculinePast: Word('летал', 3),
  femininePast: Word('летала', 3),
  neuterPast: Word('летало', 3),
  pluralPast: Word('летали', 3),
  imperativeInformal: Word('летай', 3),
  imperativeFormal: Word('летайте', 3),
  imperfect: ['полетать'],
};

perfectVerbs.set(летать.name.text, летать);

export { летать };