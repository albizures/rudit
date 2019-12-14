import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возыметь: PerfectVerb = {
  name: Word('возыметь', 5),
  singular1stPerson: Word('возымею', 5),
  singular2ndPerson: Word('возымеешь', 5),
  singular3rdPerson: Word('возымеет', 5),
  plural1stPerson: Word('возымеем', 5),
  plural2ndPerson: Word('возымеете', 5),
  plural3rdPerson: Word('возымеют', 5),
  masculinePast: Word('возымел', 5),
  femininePast: Word('возымела', 5),
  neuterPast: Word('возымело', 5),
  pluralPast: Word('возымели', 5),
  imperativeInformal: Word('возымей', 5),
  imperativeFormal: Word('возымейте', 5),
  imperfect: [],
};

perfectVerbs.set(возыметь.name.text, возыметь);

export { возыметь };