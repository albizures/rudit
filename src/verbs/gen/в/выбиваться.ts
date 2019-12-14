import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбиваться: PerfectVerb = {
  name: Word('выбиваться', 5),
  singular1stPerson: Word('выбиваюсь', 5),
  singular2ndPerson: Word('выбиваешься', 5),
  singular3rdPerson: Word('выбивается', 5),
  plural1stPerson: Word('выбиваемся', 5),
  plural2ndPerson: Word('выбиваетесь', 5),
  plural3rdPerson: Word('выбиваются', 5),
  masculinePast: Word('выбивался', 5),
  femininePast: Word('выбивалась', 5),
  neuterPast: Word('выбивалось', 5),
  pluralPast: Word('выбивались', 5),
  imperativeInformal: Word('выбивайся', 5),
  imperativeFormal: Word('выбивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выбиваться.name.text, выбиваться);

export { выбиваться };