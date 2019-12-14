import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побагроветь: PerfectVerb = {
  name: Word('побагроветь', 8),
  singular1stPerson: Word('побагровею', 8),
  singular2ndPerson: Word('побагровеешь', 8),
  singular3rdPerson: Word('побагровеет', 8),
  plural1stPerson: Word('побагровеем', 8),
  plural2ndPerson: Word('побагровеете', 8),
  plural3rdPerson: Word('побагровеют', 8),
  masculinePast: Word('побагровел', 8),
  femininePast: Word('побагровела', 8),
  neuterPast: Word('побагровело', 8),
  pluralPast: Word('побагровели', 8),
  imperativeInformal: Word('побагровей', 8),
  imperativeFormal: Word('побагровейте', 8),
  imperfect: [],
};

perfectVerbs.set(побагроветь.name.text, побагроветь);

export { побагроветь };