import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впитать: PerfectVerb = {
  name: Word('впитать', 4),
  singular1stPerson: Word('впитаю', 4),
  singular2ndPerson: Word('впитаешь', 4),
  singular3rdPerson: Word('впитает', 4),
  plural1stPerson: Word('впитаем', 4),
  plural2ndPerson: Word('впитаете', 4),
  plural3rdPerson: Word('впитают', 4),
  masculinePast: Word('впитал', 4),
  femininePast: Word('впитала', 4),
  neuterPast: Word('впитало', 4),
  pluralPast: Word('впитали', 4),
  imperativeInformal: Word('впитай', 4),
  imperativeFormal: Word('впитайте', 4),
  imperfect: ['впитывать'],
};

perfectVerbs.set(впитать.name.text, впитать);

export { впитать };