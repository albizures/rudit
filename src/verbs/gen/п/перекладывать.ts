import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекладывать: PerfectVerb = {
  name: Word('перекладывать', 6),
  singular1stPerson: Word('перекладываю', 6),
  singular2ndPerson: Word('перекладываешь', 6),
  singular3rdPerson: Word('перекладывает', 6),
  plural1stPerson: Word('перекладываем', 6),
  plural2ndPerson: Word('перекладываете', 6),
  plural3rdPerson: Word('перекладывают', 6),
  masculinePast: Word('перекладывал', 6),
  femininePast: Word('перекладывала', 6),
  neuterPast: Word('перекладывало', 6),
  pluralPast: Word('перекладывали', 6),
  imperativeInformal: Word('перекладывай', 6),
  imperativeFormal: Word('перекладывайте', 6),
  imperfect: [],
};

perfectVerbs.set(перекладывать.name.text, перекладывать);

export { перекладывать };