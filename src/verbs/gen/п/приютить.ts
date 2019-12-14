import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приютить: PerfectVerb = {
  name: Word('приютить', 5),
  singular1stPerson: Word('приючу', 5),
  singular2ndPerson: Word('приютишь', 5),
  singular3rdPerson: Word('приютит', 5),
  plural1stPerson: Word('приютим', 5),
  plural2ndPerson: Word('приютите', 5),
  plural3rdPerson: Word('приютят', 5),
  masculinePast: Word('приютил', 5),
  femininePast: Word('приютила', 5),
  neuterPast: Word('приютило', 5),
  pluralPast: Word('приютили', 5),
  imperativeInformal: Word('приюти', 5),
  imperativeFormal: Word('приютите', 5),
  imperfect: [],
};

perfectVerbs.set(приютить.name.text, приютить);

export { приютить };