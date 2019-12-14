import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заиндеветь: PerfectVerb = {
  name: Word('заиндеветь', 2),
  singular1stPerson: Word('заиндевею', 2),
  singular2ndPerson: Word('заиндевеешь', 2),
  singular3rdPerson: Word('заиндевеет', 2),
  plural1stPerson: Word('заиндевеем', 2),
  plural2ndPerson: Word('заиндевеете', 2),
  plural3rdPerson: Word('заиндевеют', 2),
  masculinePast: Word('заиндевел', 2),
  femininePast: Word('заиндевела', 2),
  neuterPast: Word('заиндевело', 2),
  pluralPast: Word('заиндевели', 2),
  imperativeInformal: Word('заиндевей', 2),
  imperativeFormal: Word('заиндевейте', 2),
  imperfect: [],
};

perfectVerbs.set(заиндеветь.name.text, заиндеветь);

export { заиндеветь };