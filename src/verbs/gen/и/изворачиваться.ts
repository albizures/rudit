import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изворачиваться: PerfectVerb = {
  name: Word('изворачиваться', 5),
  singular1stPerson: Word('изворачиваюсь', 5),
  singular2ndPerson: Word('изворачиваешься', 5),
  singular3rdPerson: Word('изворачивается', 5),
  plural1stPerson: Word('изворачиваемся', 5),
  plural2ndPerson: Word('изворачиваетесь', 5),
  plural3rdPerson: Word('изворачиваются', 5),
  masculinePast: Word('изворачивался', 5),
  femininePast: Word('изворачивалась', 5),
  neuterPast: Word('изворачивалось', 5),
  pluralPast: Word('изворачивались', 5),
  imperativeInformal: Word('изворачивайся', 5),
  imperativeFormal: Word('изворачивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изворачиваться.name.text, изворачиваться);

export { изворачиваться };