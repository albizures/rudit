import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекалывать: PerfectVerb = {
  name: Word('перекалывать', 5),
  singular1stPerson: Word('перекалываю', 5),
  singular2ndPerson: Word('перекалываешь', 5),
  singular3rdPerson: Word('перекалывает', 5),
  plural1stPerson: Word('перекалываем', 5),
  plural2ndPerson: Word('перекалываете', 5),
  plural3rdPerson: Word('перекалывают', 5),
  masculinePast: Word('перекалывал', 5),
  femininePast: Word('перекалывала', 5),
  neuterPast: Word('перекалывало', 5),
  pluralPast: Word('перекалывали', 5),
  imperativeInformal: Word('перекалывай', 5),
  imperativeFormal: Word('перекалывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекалывать.name.text, перекалывать);

export { перекалывать };