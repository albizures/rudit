import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откапывать: PerfectVerb = {
  name: Word('откапывать', 3),
  singular1stPerson: Word('откапываю', 3),
  singular2ndPerson: Word('откапываешь', 3),
  singular3rdPerson: Word('откапывает', 3),
  plural1stPerson: Word('откапываем', 3),
  plural2ndPerson: Word('откапываете', 3),
  plural3rdPerson: Word('откапывают', 3),
  masculinePast: Word('откапывал', 3),
  femininePast: Word('откапывала', 3),
  neuterPast: Word('откапывало', 3),
  pluralPast: Word('откапывали', 3),
  imperativeInformal: Word('откапывай', 3),
  imperativeFormal: Word('откапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(откапывать.name.text, откапывать);

export { откапывать };