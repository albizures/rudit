import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погромить: PerfectVerb = {
  name: Word('погромить', 6),
  singular1stPerson: Word('погромлю', 7),
  singular2ndPerson: Word('погромишь', 6),
  singular3rdPerson: Word('погромит', 6),
  plural1stPerson: Word('погромим', 6),
  plural2ndPerson: Word('погромите', 6),
  plural3rdPerson: Word('погромят', 6),
  masculinePast: Word('погромил', 6),
  femininePast: Word('погромила', 6),
  neuterPast: Word('погромило', 6),
  pluralPast: Word('погромили', 6),
  imperativeInformal: Word('погроми', 6),
  imperativeFormal: Word('погромите', 6),
  imperfect: [],
};

perfectVerbs.set(погромить.name.text, погромить);

export { погромить };