import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заместить: PerfectVerb = {
  name: Word('заместить', 6),
  singular1stPerson: Word('замещу', 5),
  singular2ndPerson: Word('заместишь', 6),
  singular3rdPerson: Word('заместит', 6),
  plural1stPerson: Word('заместим', 6),
  plural2ndPerson: Word('заместите', 6),
  plural3rdPerson: Word('заместят', 6),
  masculinePast: Word('заместил', 6),
  femininePast: Word('заместила', 6),
  neuterPast: Word('заместило', 6),
  pluralPast: Word('заместили', 6),
  imperativeInformal: Word('замести', 6),
  imperativeFormal: Word('заместите', 6),
  imperfect: [],
};

perfectVerbs.set(заместить.name.text, заместить);

export { заместить };