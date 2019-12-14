import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выздороветь: PerfectVerb = {
  name: Word('выздороветь', 1),
  singular1stPerson: Word('выздоровею', 1),
  singular2ndPerson: Word('выздоровеешь', 1),
  singular3rdPerson: Word('выздоровеет', 1),
  plural1stPerson: Word('выздоровеем', 1),
  plural2ndPerson: Word('выздоровеете', 1),
  plural3rdPerson: Word('выздоровеют', 1),
  masculinePast: Word('выздоровел', 1),
  femininePast: Word('выздоровела', 1),
  neuterPast: Word('выздоровело', 1),
  pluralPast: Word('выздоровели', 1),
  imperativeInformal: Word('выздоровей', 1),
  imperativeFormal: Word('выздоровейте', 1),
  imperfect: [],
};

perfectVerbs.set(выздороветь.name.text, выздороветь);

export { выздороветь };