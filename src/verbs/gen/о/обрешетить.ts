import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрешетить: PerfectVerb = {
  name: Word('обрешетить', 5),
  singular1stPerson: Word('обрешечу', 5),
  singular2ndPerson: Word('обрешетишь', 5),
  singular3rdPerson: Word('обрешетит', 5),
  plural1stPerson: Word('обрешетим', 5),
  plural2ndPerson: Word('обрешетите', 5),
  plural3rdPerson: Word('обрешетят', 5),
  masculinePast: Word('обрешетил', 5),
  femininePast: Word('обрешетила', 5),
  neuterPast: Word('обрешетило', 5),
  pluralPast: Word('обрешетили', 5),
  imperativeInformal: Word('обрешеть', 5),
  imperativeFormal: Word('обрешетьте', 5),
  imperfect: [],
};

perfectVerbs.set(обрешетить.name.text, обрешетить);

export { обрешетить };