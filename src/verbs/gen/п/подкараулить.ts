import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкараулить: PerfectVerb = {
  name: Word('подкараулить', 7),
  singular1stPerson: Word('подкараулю', 7),
  singular2ndPerson: Word('подкараулишь', 7),
  singular3rdPerson: Word('подкараулит', 7),
  plural1stPerson: Word('подкараулим', 7),
  plural2ndPerson: Word('подкараулите', 7),
  plural3rdPerson: Word('подкараулят', 7),
  masculinePast: Word('подкараулил', 7),
  femininePast: Word('подкараулила', 7),
  neuterPast: Word('подкараулило', 7),
  pluralPast: Word('подкараулили', 7),
  imperativeInformal: Word('подкарауль', 7),
  imperativeFormal: Word('подкараульте', 7),
  imperfect: [],
};

perfectVerbs.set(подкараулить.name.text, подкараулить);

export { подкараулить };