import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпечатывать: PerfectVerb = {
  name: Word('отпечатывать', 5),
  singular1stPerson: Word('отпечатываю', 5),
  singular2ndPerson: Word('отпечатываешь', 5),
  singular3rdPerson: Word('отпечатывает', 5),
  plural1stPerson: Word('отпечатываем', 5),
  plural2ndPerson: Word('отпечатываете', 5),
  plural3rdPerson: Word('отпечатывают', 5),
  masculinePast: Word('отпечатывал', 5),
  femininePast: Word('отпечатывала', 5),
  neuterPast: Word('отпечатывало', 5),
  pluralPast: Word('отпечатывали', 5),
  imperativeInformal: Word('отпечатывай', 5),
  imperativeFormal: Word('отпечатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(отпечатывать.name.text, отпечатывать);

export { отпечатывать };