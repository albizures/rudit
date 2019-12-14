import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окатывать: PerfectVerb = {
  name: Word('окатывать', 2),
  singular1stPerson: Word('окатываю', 2),
  singular2ndPerson: Word('окатываешь', 2),
  singular3rdPerson: Word('окатывает', 2),
  plural1stPerson: Word('окатываем', 2),
  plural2ndPerson: Word('окатываете', 2),
  plural3rdPerson: Word('окатывают', 2),
  masculinePast: Word('окатывал', 2),
  femininePast: Word('окатывала', 2),
  neuterPast: Word('окатывало', 2),
  pluralPast: Word('окатывали', 2),
  imperativeInformal: Word('окатывай', 2),
  imperativeFormal: Word('окатывайте', 2),
  imperfect: [],
};

perfectVerbs.set(окатывать.name.text, окатывать);

export { окатывать };