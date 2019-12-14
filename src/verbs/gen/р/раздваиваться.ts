import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздваиваться: PerfectVerb = {
  name: Word('раздваиваться', 5),
  singular1stPerson: Word('раздваиваюсь', 5),
  singular2ndPerson: Word('раздваиваешься', 5),
  singular3rdPerson: Word('раздваивается', 5),
  plural1stPerson: Word('раздваиваемся', 5),
  plural2ndPerson: Word('раздваиваетесь', 5),
  plural3rdPerson: Word('раздваиваются', 5),
  masculinePast: Word('раздваивался', 5),
  femininePast: Word('раздваивалась', 5),
  neuterPast: Word('раздваивалось', 5),
  pluralPast: Word('раздваивались', 5),
  imperativeInformal: Word('раздваивайся', 5),
  imperativeFormal: Word('раздваивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(раздваиваться.name.text, раздваиваться);

export { раздваиваться };