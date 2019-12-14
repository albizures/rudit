import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбиваться: PerfectVerb = {
  name: Word('разбиваться', 6),
  singular1stPerson: Word('разбиваюсь', 6),
  singular2ndPerson: Word('разбиваешься', 6),
  singular3rdPerson: Word('разбивается', 6),
  plural1stPerson: Word('разбиваемся', 6),
  plural2ndPerson: Word('разбиваетесь', 6),
  plural3rdPerson: Word('разбиваются', 6),
  masculinePast: Word('разбивался', 6),
  femininePast: Word('разбивалась', 6),
  neuterPast: Word('разбивалось', 6),
  pluralPast: Word('разбивались', 6),
  imperativeInformal: Word('разбивайся', 6),
  imperativeFormal: Word('разбивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разбиваться.name.text, разбиваться);

export { разбиваться };