import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забеременеть: PerfectVerb = {
  name: Word('забеременеть', 5),
  singular1stPerson: Word('забеременею', 5),
  singular2ndPerson: Word('забеременеешь', 5),
  singular3rdPerson: Word('забеременеет', 5),
  plural1stPerson: Word('забеременеем', 5),
  plural2ndPerson: Word('забеременеете', 5),
  plural3rdPerson: Word('забеременеют', 5),
  masculinePast: Word('забеременел', 5),
  femininePast: Word('забеременела', 5),
  neuterPast: Word('забеременело', 5),
  pluralPast: Word('забеременели', 5),
  imperativeInformal: Word('забеременей', 5),
  imperativeFormal: Word('забеременейте', 5),
  imperfect: [],
};

perfectVerbs.set(забеременеть.name.text, забеременеть);

export { забеременеть };