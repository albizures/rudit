import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклеймить: PerfectVerb = {
  name: Word('заклеймить', 7),
  singular1stPerson: Word('заклеймлю', 8),
  singular2ndPerson: Word('заклеймишь', 7),
  singular3rdPerson: Word('заклеймит', 7),
  plural1stPerson: Word('заклеймим', 7),
  plural2ndPerson: Word('заклеймите', 7),
  plural3rdPerson: Word('заклеймят', 7),
  masculinePast: Word('заклеймил', 7),
  femininePast: Word('заклеймила', 7),
  neuterPast: Word('заклеймило', 7),
  pluralPast: Word('заклеймили', 7),
  imperativeInformal: Word('заклейми', 7),
  imperativeFormal: Word('заклеймите', 7),
  imperfect: [],
};

perfectVerbs.set(заклеймить.name.text, заклеймить);

export { заклеймить };