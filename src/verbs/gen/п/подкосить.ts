import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкосить: PerfectVerb = {
  name: Word('подкосить', 6),
  singular1stPerson: Word('подкошу', 6),
  singular2ndPerson: Word('подкосишь', 4),
  singular3rdPerson: Word('подкосит', 4),
  plural1stPerson: Word('подкосим', 4),
  plural2ndPerson: Word('подкосите', 4),
  plural3rdPerson: Word('подкосят', 4),
  masculinePast: Word('подкосил', 6),
  femininePast: Word('подкосила', 6),
  neuterPast: Word('подкосило', 6),
  pluralPast: Word('подкосили', 6),
  imperativeInformal: Word('подкоси', 6),
  imperativeFormal: Word('подкосите', 6),
  imperfect: [],
};

perfectVerbs.set(подкосить.name.text, подкосить);

export { подкосить };