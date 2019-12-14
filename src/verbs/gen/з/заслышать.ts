import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслышать: PerfectVerb = {
  name: Word('заслышать', 4),
  singular1stPerson: Word('заслышу', 4),
  singular2ndPerson: Word('заслышишь', 4),
  singular3rdPerson: Word('заслышит', 4),
  plural1stPerson: Word('заслышим', 4),
  plural2ndPerson: Word('заслышите', 4),
  plural3rdPerson: Word('заслышат', 4),
  masculinePast: Word('заслышал', 4),
  femininePast: Word('заслышала', 4),
  neuterPast: Word('заслышало', 4),
  pluralPast: Word('заслышали', 4),
  imperativeInformal: Word('заслышь', 4),
  imperativeFormal: Word('заслышьте', 4),
  imperfect: [],
};

perfectVerbs.set(заслышать.name.text, заслышать);

export { заслышать };