import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разворачиваться: PerfectVerb = {
  name: Word('разворачиваться', 6),
  singular1stPerson: Word('разворачиваюсь', 6),
  singular2ndPerson: Word('разворачиваешься', 6),
  singular3rdPerson: Word('разворачивается', 6),
  plural1stPerson: Word('разворачиваемся', 6),
  plural2ndPerson: Word('разворачиваетесь', 6),
  plural3rdPerson: Word('разворачиваются', 6),
  masculinePast: Word('разворачивался', 6),
  femininePast: Word('разворачивалась', 6),
  neuterPast: Word('разворачивалось', 6),
  pluralPast: Word('разворачивались', 6),
  imperativeInformal: Word('разворачивайся', 6),
  imperativeFormal: Word('разворачивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разворачиваться.name.text, разворачиваться);

export { разворачиваться };