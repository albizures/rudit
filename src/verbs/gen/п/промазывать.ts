import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промазывать: PerfectVerb = {
  name: Word('промазывать', 4),
  singular1stPerson: Word('промазываю', 4),
  singular2ndPerson: Word('промазываешь', 4),
  singular3rdPerson: Word('промазывает', 4),
  plural1stPerson: Word('промазываем', 4),
  plural2ndPerson: Word('промазываете', 4),
  plural3rdPerson: Word('промазывают', 4),
  masculinePast: Word('промазывал', 4),
  femininePast: Word('промазывала', 4),
  neuterPast: Word('промазывало', 4),
  pluralPast: Word('промазывали', 4),
  imperativeInformal: Word('промазывай', 4),
  imperativeFormal: Word('промазывайте', 4),
  imperfect: [],
};

perfectVerbs.set(промазывать.name.text, промазывать);

export { промазывать };