import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сместить: PerfectVerb = {
  name: Word('сместить', 5),
  singular1stPerson: Word('смещу', 4),
  singular2ndPerson: Word('сместишь', 5),
  singular3rdPerson: Word('сместит', 5),
  plural1stPerson: Word('сместим', 5),
  plural2ndPerson: Word('сместите', 5),
  plural3rdPerson: Word('сместят', 5),
  masculinePast: Word('сместил', 5),
  femininePast: Word('сместила', 5),
  neuterPast: Word('сместило', 5),
  pluralPast: Word('сместили', 5),
  imperativeInformal: Word('смести', 5),
  imperativeFormal: Word('сместите', 5),
  imperfect: [],
};

perfectVerbs.set(сместить.name.text, сместить);

export { сместить };