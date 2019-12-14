import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окапывать: PerfectVerb = {
  name: Word('окапывать', 2),
  singular1stPerson: Word('окапываю', 2),
  singular2ndPerson: Word('окапываешь', 2),
  singular3rdPerson: Word('окапывает', 2),
  plural1stPerson: Word('окапываем', 2),
  plural2ndPerson: Word('окапываете', 2),
  plural3rdPerson: Word('окапывают', 2),
  masculinePast: Word('окапывал', 2),
  femininePast: Word('окапывала', 2),
  neuterPast: Word('окапывало', 2),
  pluralPast: Word('окапывали', 2),
  imperativeInformal: Word('окапывай', 2),
  imperativeFormal: Word('окапывайте', 2),
  imperfect: [],
};

perfectVerbs.set(окапывать.name.text, окапывать);

export { окапывать };