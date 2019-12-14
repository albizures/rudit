import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарешетить: PerfectVerb = {
  name: Word('зарешетить', 7),
  singular1stPerson: Word('зарешечу', 7),
  singular2ndPerson: Word('зарешетишь', 7),
  singular3rdPerson: Word('зарешетит', 7),
  plural1stPerson: Word('зарешетим', 7),
  plural2ndPerson: Word('зарешетите', 7),
  plural3rdPerson: Word('зарешетят', 7),
  masculinePast: Word('зарешетил', 7),
  femininePast: Word('зарешетила', 7),
  neuterPast: Word('зарешетило', 7),
  pluralPast: Word('зарешетили', 7),
  imperativeInformal: Word('зарешети', 7),
  imperativeFormal: Word('зарешетите', 7),
  imperfect: [],
};

perfectVerbs.set(зарешетить.name.text, зарешетить);

export { зарешетить };