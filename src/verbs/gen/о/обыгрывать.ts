import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обыгрывать: PerfectVerb = {
  name: Word('обыгрывать', 2),
  singular1stPerson: Word('обыгрываю', 2),
  singular2ndPerson: Word('обыгрываешь', 2),
  singular3rdPerson: Word('обыгрывает', 2),
  plural1stPerson: Word('обыгрываем', 2),
  plural2ndPerson: Word('обыгрываете', 2),
  plural3rdPerson: Word('обыгрывают', 2),
  masculinePast: Word('обыгрывал', 2),
  femininePast: Word('обыгрывала', 2),
  neuterPast: Word('обыгрывало', 2),
  pluralPast: Word('обыгрывали', 2),
  imperativeInformal: Word('обыгрывай', 2),
  imperativeFormal: Word('обыгрывайте', 2),
  imperfect: [],
};

perfectVerbs.set(обыгрывать.name.text, обыгрывать);

export { обыгрывать };