import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уразуметь: PerfectVerb = {
  name: Word('уразуметь', 6),
  singular1stPerson: Word('уразумею', 6),
  singular2ndPerson: Word('уразумеешь', 6),
  singular3rdPerson: Word('уразумеет', 6),
  plural1stPerson: Word('уразумеем', 6),
  plural2ndPerson: Word('уразумеете', 6),
  plural3rdPerson: Word('уразумеют', 6),
  masculinePast: Word('уразумел', 6),
  femininePast: Word('уразумела', 6),
  neuterPast: Word('уразумело', 6),
  pluralPast: Word('уразумели', 6),
  imperativeInformal: Word('уразумей', 6),
  imperativeFormal: Word('уразумейте', 6),
  imperfect: [],
};

perfectVerbs.set(уразуметь.name.text, уразуметь);

export { уразуметь };