import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задрапировывать: PerfectVerb = {
  name: Word('задрапировывать', 8),
  singular1stPerson: Word('задрапировываю', 8),
  singular2ndPerson: Word('задрапировываешь', 8),
  singular3rdPerson: Word('задрапировывает', 8),
  plural1stPerson: Word('задрапировываем', 8),
  plural2ndPerson: Word('задрапировываете', 8),
  plural3rdPerson: Word('задрапировывают', 8),
  masculinePast: Word('задрапировывал', 8),
  femininePast: Word('задрапировывала', 8),
  neuterPast: Word('задрапировывало', 8),
  pluralPast: Word('задрапировывали', 8),
  imperativeInformal: Word('задрапировывай', 8),
  imperativeFormal: Word('задрапировывайте', 8),
  imperfect: [],
};

perfectVerbs.set(задрапировывать.name.text, задрапировывать);

export { задрапировывать };