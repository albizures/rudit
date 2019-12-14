import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const частить: PerfectVerb = {
  name: Word('частить', 4),
  singular1stPerson: Word('чащу', 3),
  singular2ndPerson: Word('частишь', 4),
  singular3rdPerson: Word('частит', 4),
  plural1stPerson: Word('частим', 4),
  plural2ndPerson: Word('частите', 4),
  plural3rdPerson: Word('частят', 4),
  masculinePast: Word('частил', 4),
  femininePast: Word('частила', 4),
  neuterPast: Word('частило', 4),
  pluralPast: Word('частили', 4),
  imperativeInformal: Word('части', 4),
  imperativeFormal: Word('частите', 4),
  imperfect: [],
};

perfectVerbs.set(частить.name.text, частить);

export { частить };