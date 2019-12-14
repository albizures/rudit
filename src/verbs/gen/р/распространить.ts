import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распространить: PerfectVerb = {
  name: Word('распространить', 11),
  singular1stPerson: Word('распространю', 11),
  singular2ndPerson: Word('распространишь', 11),
  singular3rdPerson: Word('распространит', 11),
  plural1stPerson: Word('распространим', 11),
  plural2ndPerson: Word('распространите', 11),
  plural3rdPerson: Word('распространят', 11),
  masculinePast: Word('распространил', 11),
  femininePast: Word('распространила', 11),
  neuterPast: Word('распространило', 11),
  pluralPast: Word('распространили', 11),
  imperativeInformal: Word('распространи', 11),
  imperativeFormal: Word('распространите', 11),
  imperfect: ['распространять'],
};

perfectVerbs.set(распространить.name.text, распространить);

export { распространить };