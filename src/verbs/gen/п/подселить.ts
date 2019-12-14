import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подселить: PerfectVerb = {
  name: Word('подселить', 6),
  singular1stPerson: Word('подселю', 6),
  singular2ndPerson: Word('подселишь', 6),
  singular3rdPerson: Word('подселит', 6),
  plural1stPerson: Word('подселим', 6),
  plural2ndPerson: Word('подселите', 6),
  plural3rdPerson: Word('подселят', 6),
  masculinePast: Word('подселил', 6),
  femininePast: Word('подселила', 6),
  neuterPast: Word('подселило', 6),
  pluralPast: Word('подселили', 6),
  imperativeInformal: Word('подсели', 6),
  imperativeFormal: Word('подселите', 6),
  imperfect: [],
};

perfectVerbs.set(подселить.name.text, подселить);

export { подселить };