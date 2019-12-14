import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перехватывать: PerfectVerb = {
  name: Word('перехватывать', 6),
  singular1stPerson: Word('перехватываю', 6),
  singular2ndPerson: Word('перехватываешь', 6),
  singular3rdPerson: Word('перехватывает', 6),
  plural1stPerson: Word('перехватываем', 6),
  plural2ndPerson: Word('перехватываете', 6),
  plural3rdPerson: Word('перехватывают', 6),
  masculinePast: Word('перехватывал', 6),
  femininePast: Word('перехватывала', 6),
  neuterPast: Word('перехватывало', 6),
  pluralPast: Word('перехватывали', 6),
  imperativeInformal: Word('перехватывай', 6),
  imperativeFormal: Word('перехватывайте', 6),
  imperfect: [],
};

perfectVerbs.set(перехватывать.name.text, перехватывать);

export { перехватывать };