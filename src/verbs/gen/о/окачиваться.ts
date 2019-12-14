import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окачиваться: PerfectVerb = {
  name: Word('окачиваться', 2),
  singular1stPerson: Word('окачиваюсь', 2),
  singular2ndPerson: Word('окачиваешься', 2),
  singular3rdPerson: Word('окачивается', 2),
  plural1stPerson: Word('окачиваемся', 2),
  plural2ndPerson: Word('окачиваетесь', 2),
  plural3rdPerson: Word('окачиваются', 2),
  masculinePast: Word('окачивался', 2),
  femininePast: Word('окачивалась', 2),
  neuterPast: Word('окачивалось', 2),
  pluralPast: Word('окачивались', 2),
  imperativeInformal: Word('окачивайся', 2),
  imperativeFormal: Word('окачивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(окачиваться.name.text, окачиваться);

export { окачиваться };