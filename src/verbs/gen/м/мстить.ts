import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мстить: PerfectVerb = {
  name: Word('мстить', 3),
  singular1stPerson: Word('мщу', 2),
  singular2ndPerson: Word('мстишь', 3),
  singular3rdPerson: Word('мстит', 3),
  plural1stPerson: Word('мстим', 3),
  plural2ndPerson: Word('мстите', 3),
  plural3rdPerson: Word('мстят', 3),
  masculinePast: Word('мстил', 3),
  femininePast: Word('мстила', 3),
  neuterPast: Word('мстило', 3),
  pluralPast: Word('мстили', 3),
  imperativeInformal: Word('мсти', 3),
  imperativeFormal: Word('мстите', 3),
  imperfect: ['отомстить'],
};

perfectVerbs.set(мстить.name.text, мстить);

export { мстить };