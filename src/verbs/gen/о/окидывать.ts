import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окидывать: PerfectVerb = {
  name: Word('окидывать', 2),
  singular1stPerson: Word('окидываю', 2),
  singular2ndPerson: Word('окидываешь', 2),
  singular3rdPerson: Word('окидывает', 2),
  plural1stPerson: Word('окидываем', 2),
  plural2ndPerson: Word('окидываете', 2),
  plural3rdPerson: Word('окидывают', 2),
  masculinePast: Word('окидывал', 2),
  femininePast: Word('окидывала', 2),
  neuterPast: Word('окидывало', 2),
  pluralPast: Word('окидывали', 2),
  imperativeInformal: Word('окидывай', 2),
  imperativeFormal: Word('окидывайте', 2),
  imperfect: [],
};

perfectVerbs.set(окидывать.name.text, окидывать);

export { окидывать };