import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сворачиваться: PerfectVerb = {
  name: Word('сворачиваться', 4),
  singular1stPerson: Word('сворачиваюсь', 4),
  singular2ndPerson: Word('сворачиваешься', 4),
  singular3rdPerson: Word('сворачивается', 4),
  plural1stPerson: Word('сворачиваемся', 4),
  plural2ndPerson: Word('сворачиваетесь', 4),
  plural3rdPerson: Word('сворачиваются', 4),
  masculinePast: Word('сворачивался', 4),
  femininePast: Word('сворачивалась', 4),
  neuterPast: Word('сворачивалось', 4),
  pluralPast: Word('сворачивались', 4),
  imperativeInformal: Word('сворачивайся', 4),
  imperativeFormal: Word('сворачивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сворачиваться.name.text, сворачиваться);

export { сворачиваться };