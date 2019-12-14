import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплачиваться: PerfectVerb = {
  name: Word('сплачиваться', 3),
  singular1stPerson: Word('сплачиваюсь', 3),
  singular2ndPerson: Word('сплачиваешься', 3),
  singular3rdPerson: Word('сплачивается', 3),
  plural1stPerson: Word('сплачиваемся', 3),
  plural2ndPerson: Word('сплачиваетесь', 3),
  plural3rdPerson: Word('сплачиваются', 3),
  masculinePast: Word('сплачивался', 3),
  femininePast: Word('сплачивалась', 3),
  neuterPast: Word('сплачивалось', 3),
  pluralPast: Word('сплачивались', 3),
  imperativeInformal: Word('сплачивайся', 3),
  imperativeFormal: Word('сплачивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(сплачиваться.name.text, сплачиваться);

export { сплачиваться };