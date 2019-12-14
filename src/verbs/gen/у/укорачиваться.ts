import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укорачиваться: PerfectVerb = {
  name: Word('укорачиваться', 4),
  singular1stPerson: Word('укорачиваюсь', 4),
  singular2ndPerson: Word('укорачиваешься', 4),
  singular3rdPerson: Word('укорачивается', 4),
  plural1stPerson: Word('укорачиваемся', 4),
  plural2ndPerson: Word('укорачиваетесь', 4),
  plural3rdPerson: Word('укорачиваются', 4),
  masculinePast: Word('укорачивался', 4),
  femininePast: Word('укорачивалась', 4),
  neuterPast: Word('укорачивалось', 4),
  pluralPast: Word('укорачивались', 4),
  imperativeInformal: Word('укорачивайся', 4),
  imperativeFormal: Word('укорачивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(укорачиваться.name.text, укорачиваться);

export { укорачиваться };