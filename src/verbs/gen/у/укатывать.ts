import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укатывать: PerfectVerb = {
  name: Word('укатывать', 2),
  singular1stPerson: Word('укатываю', 2),
  singular2ndPerson: Word('укатываешь', 2),
  singular3rdPerson: Word('укатывает', 2),
  plural1stPerson: Word('укатываем', 2),
  plural2ndPerson: Word('укатываете', 2),
  plural3rdPerson: Word('укатывают', 2),
  masculinePast: Word('укатывал', 2),
  femininePast: Word('укатывала', 2),
  neuterPast: Word('укатывало', 2),
  pluralPast: Word('укатывали', 2),
  imperativeInformal: Word('укатывай', 2),
  imperativeFormal: Word('укатывайте', 2),
  imperfect: [],
};

perfectVerbs.set(укатывать.name.text, укатывать);

export { укатывать };