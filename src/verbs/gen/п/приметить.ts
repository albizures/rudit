import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приметить: PerfectVerb = {
  name: Word('приметить', 4),
  singular1stPerson: Word('примечу', 4),
  singular2ndPerson: Word('приметишь', 4),
  singular3rdPerson: Word('приметит', 4),
  plural1stPerson: Word('приметим', 4),
  plural2ndPerson: Word('приметите', 4),
  plural3rdPerson: Word('приметят', 4),
  masculinePast: Word('приметил', 4),
  femininePast: Word('приметила', 4),
  neuterPast: Word('приметило', 4),
  pluralPast: Word('приметили', 4),
  imperativeInformal: Word('приметь', 4),
  imperativeFormal: Word('приметьте', 4),
  imperfect: [],
};

perfectVerbs.set(приметить.name.text, приметить);

export { приметить };