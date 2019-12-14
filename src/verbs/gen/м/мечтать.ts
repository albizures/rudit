import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мечтать: PerfectVerb = {
  name: Word('мечтать', 4),
  singular1stPerson: Word('мечтаю', 4),
  singular2ndPerson: Word('мечтаешь', 4),
  singular3rdPerson: Word('мечтает', 4),
  plural1stPerson: Word('мечтаем', 4),
  plural2ndPerson: Word('мечтаете', 4),
  plural3rdPerson: Word('мечтают', 4),
  masculinePast: Word('мечтал', 4),
  femininePast: Word('мечтала', 4),
  neuterPast: Word('мечтало', 4),
  pluralPast: Word('мечтали', 4),
  imperativeInformal: Word('мечтай', 4),
  imperativeFormal: Word('мечтайте', 4),
  imperfect: [],
};

perfectVerbs.set(мечтать.name.text, мечтать);

export { мечтать };