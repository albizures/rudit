import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очуметь: PerfectVerb = {
  name: Word('очуметь', 4),
  singular1stPerson: Word('очумею', 4),
  singular2ndPerson: Word('очумеешь', 4),
  singular3rdPerson: Word('очумеет', 4),
  plural1stPerson: Word('очумеем', 4),
  plural2ndPerson: Word('очумеете', 4),
  plural3rdPerson: Word('очумеют', 4),
  masculinePast: Word('очумел', 4),
  femininePast: Word('очумела', 4),
  neuterPast: Word('очумело', 4),
  pluralPast: Word('очумели', 4),
  imperativeInformal: Word('очумей', 4),
  imperativeFormal: Word('очумейте', 4),
  imperfect: [],
};

perfectVerbs.set(очуметь.name.text, очуметь);

export { очуметь };