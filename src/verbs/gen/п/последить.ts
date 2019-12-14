import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const последить: PerfectVerb = {
  name: Word('последить', 6),
  singular1stPerson: Word('послежу', 6),
  singular2ndPerson: Word('последишь', 6),
  singular3rdPerson: Word('последит', 6),
  plural1stPerson: Word('последим', 6),
  plural2ndPerson: Word('последите', 6),
  plural3rdPerson: Word('последят', 6),
  masculinePast: Word('последил', 6),
  femininePast: Word('последила', 6),
  neuterPast: Word('последило', 6),
  pluralPast: Word('последили', 6),
  imperativeInformal: Word('последи', 6),
  imperativeFormal: Word('последите', 6),
  imperfect: [],
};

perfectVerbs.set(последить.name.text, последить);

export { последить };