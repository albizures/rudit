import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разуметь: PerfectVerb = {
  name: Word('разуметь', 5),
  singular1stPerson: Word('разумею', 5),
  singular2ndPerson: Word('разумеешь', 5),
  singular3rdPerson: Word('разумеет', 5),
  plural1stPerson: Word('разумеем', 5),
  plural2ndPerson: Word('разумеете', 5),
  plural3rdPerson: Word('разумеют', 5),
  masculinePast: Word('разумел', 5),
  femininePast: Word('разумела', 5),
  neuterPast: Word('разумело', 5),
  pluralPast: Word('разумели', 5),
  imperativeInformal: Word('разумей', 5),
  imperativeFormal: Word('разумейте', 5),
  imperfect: ['уразуметь'],
};

perfectVerbs.set(разуметь.name.text, разуметь);

export { разуметь };