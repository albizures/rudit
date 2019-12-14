import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поместить: PerfectVerb = {
  name: Word('поместить', 6),
  singular1stPerson: Word('помещу', 5),
  singular2ndPerson: Word('поместишь', 6),
  singular3rdPerson: Word('поместит', 6),
  plural1stPerson: Word('поместим', 6),
  plural2ndPerson: Word('поместите', 6),
  plural3rdPerson: Word('поместят', 6),
  masculinePast: Word('поместил', 6),
  femininePast: Word('поместила', 6),
  neuterPast: Word('поместило', 6),
  pluralPast: Word('поместили', 6),
  imperativeInformal: Word('помести', 6),
  imperativeFormal: Word('поместите', 6),
  imperfect: ['помещать'],
};

perfectVerbs.set(поместить.name.text, поместить);

export { поместить };