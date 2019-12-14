import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const листать: PerfectVerb = {
  name: Word('листать', 4),
  singular1stPerson: Word('листаю', 4),
  singular2ndPerson: Word('листаешь', 4),
  singular3rdPerson: Word('листает', 4),
  plural1stPerson: Word('листаем', 4),
  plural2ndPerson: Word('листаете', 4),
  plural3rdPerson: Word('листают', 4),
  masculinePast: Word('листал', 4),
  femininePast: Word('листала', 4),
  neuterPast: Word('листало', 4),
  pluralPast: Word('листали', 4),
  imperativeInformal: Word('листай', 4),
  imperativeFormal: Word('листайте', 4),
  imperfect: [],
};

perfectVerbs.set(листать.name.text, листать);

export { листать };