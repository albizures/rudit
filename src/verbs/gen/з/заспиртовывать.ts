import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заспиртовывать: PerfectVerb = {
  name: Word('заспиртовывать', 7),
  singular1stPerson: Word('заспиртовываю', 7),
  singular2ndPerson: Word('заспиртовываешь', 7),
  singular3rdPerson: Word('заспиртовывает', 7),
  plural1stPerson: Word('заспиртовываем', 7),
  plural2ndPerson: Word('заспиртовываете', 7),
  plural3rdPerson: Word('заспиртовывают', 7),
  masculinePast: Word('заспиртовывал', 7),
  femininePast: Word('заспиртовывала', 7),
  neuterPast: Word('заспиртовывало', 7),
  pluralPast: Word('заспиртовывали', 7),
  imperativeInformal: Word('заспиртовывай', 7),
  imperativeFormal: Word('заспиртовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(заспиртовывать.name.text, заспиртовывать);

export { заспиртовывать };