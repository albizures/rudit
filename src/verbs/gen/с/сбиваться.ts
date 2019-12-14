import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбиваться: PerfectVerb = {
  name: Word('сбиваться', 4),
  singular1stPerson: Word('сбиваюсь', 4),
  singular2ndPerson: Word('сбиваешься', 4),
  singular3rdPerson: Word('сбивается', 4),
  plural1stPerson: Word('сбиваемся', 4),
  plural2ndPerson: Word('сбиваетесь', 4),
  plural3rdPerson: Word('сбиваются', 4),
  masculinePast: Word('сбивался', 4),
  femininePast: Word('сбивалась', 4),
  neuterPast: Word('сбивалось', 4),
  pluralPast: Word('сбивались', 4),
  imperativeInformal: Word('сбивайся', 4),
  imperativeFormal: Word('сбивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сбиваться.name.text, сбиваться);

export { сбиваться };