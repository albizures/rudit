import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грустить: PerfectVerb = {
  name: Word('грустить', 5),
  singular1stPerson: Word('грущу', 4),
  singular2ndPerson: Word('грустишь', 5),
  singular3rdPerson: Word('грустит', 5),
  plural1stPerson: Word('грустим', 5),
  plural2ndPerson: Word('грустите', 5),
  plural3rdPerson: Word('грустят', 5),
  masculinePast: Word('грустил', 5),
  femininePast: Word('грустила', 5),
  neuterPast: Word('грустило', 5),
  pluralPast: Word('грустили', 5),
  imperativeInformal: Word('грусти', 5),
  imperativeFormal: Word('грустите', 5),
  imperfect: ['загрустить'],
};

perfectVerbs.set(грустить.name.text, грустить);

export { грустить };