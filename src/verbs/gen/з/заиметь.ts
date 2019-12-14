import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заиметь: PerfectVerb = {
  name: Word('заиметь', 4),
  singular1stPerson: Word('заимею', 4),
  singular2ndPerson: Word('заимеешь', 4),
  singular3rdPerson: Word('заимеет', 4),
  plural1stPerson: Word('заимеем', 4),
  plural2ndPerson: Word('заимеете', 4),
  plural3rdPerson: Word('заимеют', 4),
  masculinePast: Word('заимел', 4),
  femininePast: Word('заимела', 4),
  neuterPast: Word('заимело', 4),
  pluralPast: Word('заимели', 4),
  imperativeInformal: Word('заимей', 4),
  imperativeFormal: Word('заимейте', 4),
  imperfect: [],
};

perfectVerbs.set(заиметь.name.text, заиметь);

export { заиметь };