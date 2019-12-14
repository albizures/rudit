import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отомстить: PerfectVerb = {
  name: Word('отомстить', 6),
  singular1stPerson: Word('отомщу', 5),
  singular2ndPerson: Word('отомстишь', 6),
  singular3rdPerson: Word('отомстит', 6),
  plural1stPerson: Word('отомстим', 6),
  plural2ndPerson: Word('отомстите', 6),
  plural3rdPerson: Word('отомстят', 6),
  masculinePast: Word('отомстил', 6),
  femininePast: Word('отомстила', 6),
  neuterPast: Word('отомстило', 6),
  pluralPast: Word('отомстили', 6),
  imperativeInformal: Word('отомсти', 6),
  imperativeFormal: Word('отомстите', 6),
  imperfect: ['мстить'],
};

perfectVerbs.set(отомстить.name.text, отомстить);

export { отомстить };