import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнашиваться: PerfectVerb = {
  name: Word('разнашиваться', 4),
  singular1stPerson: Word('разнашиваюсь', 4),
  singular2ndPerson: Word('разнашиваешься', 4),
  singular3rdPerson: Word('разнашивается', 4),
  plural1stPerson: Word('разнашиваемся', 4),
  plural2ndPerson: Word('разнашиваетесь', 4),
  plural3rdPerson: Word('разнашиваются', 4),
  masculinePast: Word('разнашивался', 4),
  femininePast: Word('разнашивалась', 4),
  neuterPast: Word('разнашивалось', 4),
  pluralPast: Word('разнашивались', 4),
  imperativeInformal: Word('разнашивайся', 4),
  imperativeFormal: Word('разнашивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разнашиваться.name.text, разнашиваться);

export { разнашиваться };