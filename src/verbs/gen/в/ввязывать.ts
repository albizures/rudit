import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ввязывать: PerfectVerb = {
  name: Word('ввязывать', 2),
  singular1stPerson: Word('ввязываю', 2),
  singular2ndPerson: Word('ввязываешь', 2),
  singular3rdPerson: Word('ввязывает', 2),
  plural1stPerson: Word('ввязываем', 2),
  plural2ndPerson: Word('ввязываете', 2),
  plural3rdPerson: Word('ввязывают', 2),
  masculinePast: Word('ввязывал', 2),
  femininePast: Word('ввязывала', 2),
  neuterPast: Word('ввязывало', 2),
  pluralPast: Word('ввязывали', 2),
  imperativeInformal: Word('ввязывай', 2),
  imperativeFormal: Word('ввязывайте', 2),
  imperfect: [],
};

perfectVerbs.set(ввязывать.name.text, ввязывать);

export { ввязывать };