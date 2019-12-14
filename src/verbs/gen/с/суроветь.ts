import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const суроветь: PerfectVerb = {
  name: Word('суроветь', 3),
  singular1stPerson: Word('суровею', 3),
  singular2ndPerson: Word('суровеешь', 3),
  singular3rdPerson: Word('суровеет', 3),
  plural1stPerson: Word('суровеем', 3),
  plural2ndPerson: Word('суровеете', 3),
  plural3rdPerson: Word('суровеют', 3),
  masculinePast: Word('суровел', 3),
  femininePast: Word('суровела', 3),
  neuterPast: Word('суровело', 3),
  pluralPast: Word('суровели', 3),
  imperativeInformal: Word('суровей', 3),
  imperativeFormal: Word('суровейте', 3),
  imperfect: [],
};

perfectVerbs.set(суроветь.name.text, суроветь);

export { суроветь };