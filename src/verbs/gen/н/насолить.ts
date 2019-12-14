import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насолить: PerfectVerb = {
  name: Word('насолить', 5),
  singular1stPerson: Word('насолю', 5),
  singular2ndPerson: Word('насолишь', 3),
  singular3rdPerson: Word('насолит', 3),
  plural1stPerson: Word('насолим', 3),
  plural2ndPerson: Word('насолите', 3),
  plural3rdPerson: Word('насолят', 3),
  masculinePast: Word('насолил', 5),
  femininePast: Word('насолила', 5),
  neuterPast: Word('насолило', 5),
  pluralPast: Word('насолили', 5),
  imperativeInformal: Word('насоли', 5),
  imperativeFormal: Word('насолите', 5),
  imperfect: [],
};

perfectVerbs.set(насолить.name.text, насолить);

export { насолить };