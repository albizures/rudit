import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впитывать: PerfectVerb = {
  name: Word('впитывать', 2),
  singular1stPerson: Word('впитываю', 2),
  singular2ndPerson: Word('впитываешь', 2),
  singular3rdPerson: Word('впитывает', 2),
  plural1stPerson: Word('впитываем', 2),
  plural2ndPerson: Word('впитываете', 2),
  plural3rdPerson: Word('впитывают', 2),
  masculinePast: Word('впитывал', 2),
  femininePast: Word('впитывала', 2),
  neuterPast: Word('впитывало', 2),
  pluralPast: Word('впитывали', 2),
  imperativeInformal: Word('впитывай', 2),
  imperativeFormal: Word('впитывайте', 2),
  imperfect: ['впитать'],
};

perfectVerbs.set(впитывать.name.text, впитывать);

export { впитывать };