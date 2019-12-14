import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскочить: PerfectVerb = {
  name: Word('заскочить', 6),
  singular1stPerson: Word('заскочу', 6),
  singular2ndPerson: Word('заскочишь', 4),
  singular3rdPerson: Word('заскочит', 4),
  plural1stPerson: Word('заскочим', 4),
  plural2ndPerson: Word('заскочите', 4),
  plural3rdPerson: Word('заскочат', 4),
  masculinePast: Word('заскочил', 6),
  femininePast: Word('заскочила', 6),
  neuterPast: Word('заскочило', 6),
  pluralPast: Word('заскочили', 6),
  imperativeInformal: Word('заскочи', 6),
  imperativeFormal: Word('заскочите', 6),
  imperfect: [],
};

perfectVerbs.set(заскочить.name.text, заскочить);

export { заскочить };