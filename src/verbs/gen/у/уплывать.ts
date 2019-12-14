import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплывать: PerfectVerb = {
  name: Word('уплывать', 5),
  singular1stPerson: Word('уплываю', 5),
  singular2ndPerson: Word('уплываешь', 5),
  singular3rdPerson: Word('уплывает', 5),
  plural1stPerson: Word('уплываем', 5),
  plural2ndPerson: Word('уплываете', 5),
  plural3rdPerson: Word('уплывают', 5),
  masculinePast: Word('уплывал', 5),
  femininePast: Word('уплывала', 5),
  neuterPast: Word('уплывало', 5),
  pluralPast: Word('уплывали', 5),
  imperativeInformal: Word('уплывай', 5),
  imperativeFormal: Word('уплывайте', 5),
  imperfect: [],
};

perfectVerbs.set(уплывать.name.text, уплывать);

export { уплывать };