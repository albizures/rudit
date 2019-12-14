import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задрёмывать: PerfectVerb = {
  name: Word('задрёмывать', 4),
  singular1stPerson: Word('задрёмываю', 4),
  singular2ndPerson: Word('задрёмываешь', 4),
  singular3rdPerson: Word('задрёмывает', 4),
  plural1stPerson: Word('задрёмываем', 4),
  plural2ndPerson: Word('задрёмываете', 4),
  plural3rdPerson: Word('задрёмывают', 4),
  masculinePast: Word('задрёмывал', 4),
  femininePast: Word('задрёмывала', 4),
  neuterPast: Word('задрёмывало', 4),
  pluralPast: Word('задрёмывали', 4),
  imperativeInformal: Word('задрёмывай', 4),
  imperativeFormal: Word('задрёмывайте', 4),
  imperfect: [],
};

perfectVerbs.set(задрёмывать.name.text, задрёмывать);

export { задрёмывать };