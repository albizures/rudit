import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const иметь: PerfectVerb = {
  name: Word('иметь', 2),
  singular1stPerson: Word('имею', 2),
  singular2ndPerson: Word('имеешь', 2),
  singular3rdPerson: Word('имеет', 2),
  plural1stPerson: Word('имеем', 2),
  plural2ndPerson: Word('имеете', 2),
  plural3rdPerson: Word('имеют', 2),
  masculinePast: Word('имел', 2),
  femininePast: Word('имела', 2),
  neuterPast: Word('имело', 2),
  pluralPast: Word('имели', 2),
  imperativeInformal: Word('имей', 2),
  imperativeFormal: Word('имейте', 2),
  imperfect: [],
};

perfectVerbs.set(иметь.name.text, иметь);

export { иметь };