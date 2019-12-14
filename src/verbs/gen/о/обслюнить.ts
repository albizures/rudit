import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обслюнить: PerfectVerb = {
  name: Word('обслюнить', 6),
  singular1stPerson: Word('обслюню', 6),
  singular2ndPerson: Word('обслюнишь', 6),
  singular3rdPerson: Word('обслюнит', 6),
  plural1stPerson: Word('обслюним', 6),
  plural2ndPerson: Word('обслюните', 6),
  plural3rdPerson: Word('обслюнят', 6),
  masculinePast: Word('обслюнил', 6),
  femininePast: Word('обслюнила', 6),
  neuterPast: Word('обслюнило', 6),
  pluralPast: Word('обслюнили', 6),
  imperativeInformal: Word('обслюни', 6),
  imperativeFormal: Word('обслюните', 6),
  imperfect: [],
};

perfectVerbs.set(обслюнить.name.text, обслюнить);

export { обслюнить };