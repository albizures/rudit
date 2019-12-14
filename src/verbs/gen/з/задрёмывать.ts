import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задрёмывать: PerfectVerb = {
  name: Word('задрёмывать', 1),
  singular1stPerson: Word('задрёмываю', 1),
  singular2ndPerson: Word('задрёмываешь', 1),
  singular3rdPerson: Word('задрёмывает', 1),
  plural1stPerson: Word('задрёмываем', 1),
  plural2ndPerson: Word('задрёмываете', 1),
  plural3rdPerson: Word('задрёмывают', 1),
  masculinePast: Word('задрёмывал', 1),
  femininePast: Word('задрёмывала', 1),
  neuterPast: Word('задрёмывало', 1),
  pluralPast: Word('задрёмывали', 1),
  imperativeInformal: Word('задрёмывай', 1),
  imperativeFormal: Word('задрёмывайте', 1),
  imperfect: [],
};

perfectVerbs.set(задрёмывать.name.text, задрёмывать);

export { задрёмывать };