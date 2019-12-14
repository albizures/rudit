import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const судить: PerfectVerb = {
  name: Word('судить', 3),
  singular1stPerson: Word('сужу', 3),
  singular2ndPerson: Word('судишь', 1),
  singular3rdPerson: Word('судит', 1),
  plural1stPerson: Word('судим', 1),
  plural2ndPerson: Word('судите', 1),
  plural3rdPerson: Word('судят', 1),
  masculinePast: Word('судил', 3),
  femininePast: Word('судила', 3),
  neuterPast: Word('судило', 3),
  pluralPast: Word('судили', 3),
  imperativeInformal: Word('суди', 3),
  imperativeFormal: Word('судите', 3),
  imperfect: [],
};

perfectVerbs.set(судить.name.text, судить);

export { судить };