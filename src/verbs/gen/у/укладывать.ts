import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укладывать: PerfectVerb = {
  name: Word('укладывать', 3),
  singular1stPerson: Word('укладываю', 3),
  singular2ndPerson: Word('укладываешь', 3),
  singular3rdPerson: Word('укладывает', 3),
  plural1stPerson: Word('укладываем', 3),
  plural2ndPerson: Word('укладываете', 3),
  plural3rdPerson: Word('укладывают', 3),
  masculinePast: Word('укладывал', 3),
  femininePast: Word('укладывала', 3),
  neuterPast: Word('укладывало', 3),
  pluralPast: Word('укладывали', 3),
  imperativeInformal: Word('укладывай', 3),
  imperativeFormal: Word('укладывайте', 3),
  imperfect: ['уложить'],
};

perfectVerbs.set(укладывать.name.text, укладывать);

export { укладывать };