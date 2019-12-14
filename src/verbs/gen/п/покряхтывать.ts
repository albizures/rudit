import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покряхтывать: PerfectVerb = {
  name: Word('покряхтывать', 4),
  singular1stPerson: Word('покряхтываю', 4),
  singular2ndPerson: Word('покряхтываешь', 4),
  singular3rdPerson: Word('покряхтывает', 4),
  plural1stPerson: Word('покряхтываем', 4),
  plural2ndPerson: Word('покряхтываете', 4),
  plural3rdPerson: Word('покряхтывают', 4),
  masculinePast: Word('покряхтывал', 4),
  femininePast: Word('покряхтывала', 4),
  neuterPast: Word('покряхтывало', 4),
  pluralPast: Word('покряхтывали', 4),
  imperativeInformal: Word('покряхтывай', 4),
  imperativeFormal: Word('покряхтывайте', 4),
  imperfect: [],
};

perfectVerbs.set(покряхтывать.name.text, покряхтывать);

export { покряхтывать };