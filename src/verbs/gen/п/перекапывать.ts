import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекапывать: PerfectVerb = {
  name: Word('перекапывать', 5),
  singular1stPerson: Word('перекапываю', 5),
  singular2ndPerson: Word('перекапываешь', 5),
  singular3rdPerson: Word('перекапывает', 5),
  plural1stPerson: Word('перекапываем', 5),
  plural2ndPerson: Word('перекапываете', 5),
  plural3rdPerson: Word('перекапывают', 5),
  masculinePast: Word('перекапывал', 5),
  femininePast: Word('перекапывала', 5),
  neuterPast: Word('перекапывало', 5),
  pluralPast: Word('перекапывали', 5),
  imperativeInformal: Word('перекапывай', 5),
  imperativeFormal: Word('перекапывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекапывать.name.text, перекапывать);

export { перекапывать };