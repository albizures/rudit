import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обходить: PerfectVerb = {
  name: Word('обходить', 5),
  singular1stPerson: Word('обхожу', 5),
  singular2ndPerson: Word('обходишь', 3),
  singular3rdPerson: Word('обходит', 3),
  plural1stPerson: Word('обходим', 3),
  plural2ndPerson: Word('обходите', 3),
  plural3rdPerson: Word('обходят', 3),
  masculinePast: Word('обходил', 5),
  femininePast: Word('обходила', 5),
  neuterPast: Word('обходило', 5),
  pluralPast: Word('обходили', 5),
  imperativeInformal: Word('обходи', 5),
  imperativeFormal: Word('обходите', 5),
  imperfect: ['обойти'],
};

perfectVerbs.set(обходить.name.text, обходить);

export { обходить };