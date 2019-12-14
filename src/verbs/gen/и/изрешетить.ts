import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрешетить: PerfectVerb = {
  name: Word('изрешетить', 7),
  singular1stPerson: Word('изрешечу', 7),
  singular2ndPerson: Word('изрешетишь', 7),
  singular3rdPerson: Word('изрешетит', 7),
  plural1stPerson: Word('изрешетим', 7),
  plural2ndPerson: Word('изрешетите', 7),
  plural3rdPerson: Word('изрешетят', 7),
  masculinePast: Word('изрешетил', 7),
  femininePast: Word('изрешетила', 7),
  neuterPast: Word('изрешетило', 7),
  pluralPast: Word('изрешетили', 7),
  imperativeInformal: Word('изрешети', 7),
  imperativeFormal: Word('изрешетите', 7),
  imperfect: [],
};

perfectVerbs.set(изрешетить.name.text, изрешетить);

export { изрешетить };