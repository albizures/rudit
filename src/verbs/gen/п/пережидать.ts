import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережидать: PerfectVerb = {
  name: Word('пережидать', 7),
  singular1stPerson: Word('пережидаю', 7),
  singular2ndPerson: Word('пережидаешь', 7),
  singular3rdPerson: Word('пережидает', 7),
  plural1stPerson: Word('пережидаем', 7),
  plural2ndPerson: Word('пережидаете', 7),
  plural3rdPerson: Word('пережидают', 7),
  masculinePast: Word('пережидал', 7),
  femininePast: Word('пережидала', 7),
  neuterPast: Word('пережидало', 7),
  pluralPast: Word('пережидали', 7),
  imperativeInformal: Word('пережидай', 7),
  imperativeFormal: Word('пережидайте', 7),
  imperfect: [],
};

perfectVerbs.set(пережидать.name.text, пережидать);

export { пережидать };