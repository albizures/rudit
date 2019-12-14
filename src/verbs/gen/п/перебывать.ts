import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебывать: PerfectVerb = {
  name: Word('перебывать', 7),
  singular1stPerson: Word('перебываю', 7),
  singular2ndPerson: Word('перебываешь', 7),
  singular3rdPerson: Word('перебывает', 7),
  plural1stPerson: Word('перебываем', 7),
  plural2ndPerson: Word('перебываете', 7),
  plural3rdPerson: Word('перебывают', 7),
  masculinePast: Word('перебывал', 7),
  femininePast: Word('перебывала', 7),
  neuterPast: Word('перебывало', 7),
  pluralPast: Word('перебывали', 7),
  imperativeInformal: Word('перебывай', 7),
  imperativeFormal: Word('перебывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перебывать.name.text, перебывать);

export { перебывать };