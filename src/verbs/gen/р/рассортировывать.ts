import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассортировывать: PerfectVerb = {
  name: Word('рассортировывать', 9),
  singular1stPerson: Word('рассортировываю', 9),
  singular2ndPerson: Word('рассортировываешь', 9),
  singular3rdPerson: Word('рассортировывает', 9),
  plural1stPerson: Word('рассортировываем', 9),
  plural2ndPerson: Word('рассортировываете', 9),
  plural3rdPerson: Word('рассортировывают', 9),
  masculinePast: Word('рассортировывал', 9),
  femininePast: Word('рассортировывала', 9),
  neuterPast: Word('рассортировывало', 9),
  pluralPast: Word('рассортировывали', 9),
  imperativeInformal: Word('рассортировывай', 9),
  imperativeFormal: Word('рассортировывайте', 9),
  imperfect: [],
};

perfectVerbs.set(рассортировывать.name.text, рассортировывать);

export { рассортировывать };