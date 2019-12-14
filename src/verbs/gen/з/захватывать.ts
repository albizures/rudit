import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захватывать: PerfectVerb = {
  name: Word('захватывать', 4),
  singular1stPerson: Word('захватываю', 4),
  singular2ndPerson: Word('захватываешь', 4),
  singular3rdPerson: Word('захватывает', 4),
  plural1stPerson: Word('захватываем', 4),
  plural2ndPerson: Word('захватываете', 4),
  plural3rdPerson: Word('захватывают', 4),
  masculinePast: Word('захватывал', 4),
  femininePast: Word('захватывала', 4),
  neuterPast: Word('захватывало', 4),
  pluralPast: Word('захватывали', 4),
  imperativeInformal: Word('захватывай', 4),
  imperativeFormal: Word('захватывайте', 4),
  imperfect: ['захватить'],
};

perfectVerbs.set(захватывать.name.text, захватывать);

export { захватывать };