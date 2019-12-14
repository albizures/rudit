import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продолжать: PerfectVerb = {
  name: Word('продолжать', 7),
  singular1stPerson: Word('продолжаю', 7),
  singular2ndPerson: Word('продолжаешь', 7),
  singular3rdPerson: Word('продолжает', 7),
  plural1stPerson: Word('продолжаем', 7),
  plural2ndPerson: Word('продолжаете', 7),
  plural3rdPerson: Word('продолжают', 7),
  masculinePast: Word('продолжал', 7),
  femininePast: Word('продолжала', 7),
  neuterPast: Word('продолжало', 7),
  pluralPast: Word('продолжали', 7),
  imperativeInformal: Word('продолжай', 7),
  imperativeFormal: Word('продолжайте', 7),
  imperfect: ['продолжить'],
};

perfectVerbs.set(продолжать.name.text, продолжать);

export { продолжать };