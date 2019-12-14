import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распуститься: PerfectVerb = {
  name: Word('распуститься', 7),
  singular1stPerson: Word('распущусь', 6),
  singular2ndPerson: Word('распустишься', 4),
  singular3rdPerson: Word('распустится', 4),
  plural1stPerson: Word('распустимся', 4),
  plural2ndPerson: Word('распуститесь', 4),
  plural3rdPerson: Word('распустятся', 4),
  masculinePast: Word('распустился', 7),
  femininePast: Word('распустилась', 7),
  neuterPast: Word('распустилось', 7),
  pluralPast: Word('распустились', 7),
  imperativeInformal: Word('распустись', 7),
  imperativeFormal: Word('распуститесь', 7),
  imperfect: [],
};

perfectVerbs.set(распуститься.name.text, распуститься);

export { распуститься };