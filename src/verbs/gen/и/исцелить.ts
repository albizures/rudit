import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исцелить: PerfectVerb = {
  name: Word('исцелить', 5),
  singular1stPerson: Word('исцелю', 5),
  singular2ndPerson: Word('исцелишь', 5),
  singular3rdPerson: Word('исцелит', 5),
  plural1stPerson: Word('исцелим', 5),
  plural2ndPerson: Word('исцелите', 5),
  plural3rdPerson: Word('исцелят', 5),
  masculinePast: Word('исцелил', 5),
  femininePast: Word('исцелила', 5),
  neuterPast: Word('исцелило', 5),
  pluralPast: Word('исцелили', 5),
  imperativeInformal: Word('исцели', 5),
  imperativeFormal: Word('исцелите', 5),
  imperfect: [],
};

perfectVerbs.set(исцелить.name.text, исцелить);

export { исцелить };