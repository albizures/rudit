import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осваиваться: PerfectVerb = {
  name: Word('осваиваться', 3),
  singular1stPerson: Word('осваиваюсь', 3),
  singular2ndPerson: Word('осваиваешься', 3),
  singular3rdPerson: Word('осваивается', 3),
  plural1stPerson: Word('осваиваемся', 3),
  plural2ndPerson: Word('осваиваетесь', 3),
  plural3rdPerson: Word('осваиваются', 3),
  masculinePast: Word('осваивался', 3),
  femininePast: Word('осваивалась', 3),
  neuterPast: Word('осваивалось', 3),
  pluralPast: Word('осваивались', 3),
  imperativeInformal: Word('осваивайся', 3),
  imperativeFormal: Word('осваивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(осваиваться.name.text, осваиваться);

export { осваиваться };