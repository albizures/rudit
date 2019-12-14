import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевоспитывать: PerfectVerb = {
  name: Word('перевоспитывать', 8),
  singular1stPerson: Word('перевоспитываю', 8),
  singular2ndPerson: Word('перевоспитываешь', 8),
  singular3rdPerson: Word('перевоспитывает', 8),
  plural1stPerson: Word('перевоспитываем', 8),
  plural2ndPerson: Word('перевоспитываете', 8),
  plural3rdPerson: Word('перевоспитывают', 8),
  masculinePast: Word('перевоспитывал', 8),
  femininePast: Word('перевоспитывала', 8),
  neuterPast: Word('перевоспитывало', 8),
  pluralPast: Word('перевоспитывали', 8),
  imperativeInformal: Word('перевоспитывай', 8),
  imperativeFormal: Word('перевоспитывайте', 8),
  imperfect: [],
};

perfectVerbs.set(перевоспитывать.name.text, перевоспитывать);

export { перевоспитывать };