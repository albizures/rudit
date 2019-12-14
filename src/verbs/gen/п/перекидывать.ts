import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекидывать: PerfectVerb = {
  name: Word('перекидывать', 5),
  singular1stPerson: Word('перекидываю', 5),
  singular2ndPerson: Word('перекидываешь', 5),
  singular3rdPerson: Word('перекидывает', 5),
  plural1stPerson: Word('перекидываем', 5),
  plural2ndPerson: Word('перекидываете', 5),
  plural3rdPerson: Word('перекидывают', 5),
  masculinePast: Word('перекидывал', 5),
  femininePast: Word('перекидывала', 5),
  neuterPast: Word('перекидывало', 5),
  pluralPast: Word('перекидывали', 5),
  imperativeInformal: Word('перекидывай', 5),
  imperativeFormal: Word('перекидывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекидывать.name.text, перекидывать);

export { перекидывать };