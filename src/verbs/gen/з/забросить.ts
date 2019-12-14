import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забросить: PerfectVerb = {
  name: Word('забросить', 4),
  singular1stPerson: Word('заброшу', 4),
  singular2ndPerson: Word('забросишь', 4),
  singular3rdPerson: Word('забросит', 4),
  plural1stPerson: Word('забросим', 4),
  plural2ndPerson: Word('забросите', 4),
  plural3rdPerson: Word('забросят', 4),
  masculinePast: Word('забросил', 4),
  femininePast: Word('забросила', 4),
  neuterPast: Word('забросило', 4),
  pluralPast: Word('забросили', 4),
  imperativeInformal: Word('забрось', 4),
  imperativeFormal: Word('забросьте', 4),
  imperfect: [],
};

perfectVerbs.set(забросить.name.text, забросить);

export { забросить };