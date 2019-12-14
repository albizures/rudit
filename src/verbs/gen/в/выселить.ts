import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выселить: PerfectVerb = {
  name: Word('выселить', 1),
  singular1stPerson: Word('выселю', 1),
  singular2ndPerson: Word('выселишь', 1),
  singular3rdPerson: Word('выселит', 1),
  plural1stPerson: Word('выселим', 1),
  plural2ndPerson: Word('выселите', 1),
  plural3rdPerson: Word('выселят', 1),
  masculinePast: Word('выселил', 1),
  femininePast: Word('выселила', 1),
  neuterPast: Word('выселило', 1),
  pluralPast: Word('выселили', 1),
  imperativeInformal: Word('высели', 1),
  imperativeFormal: Word('выселите', 1),
  imperfect: ['выселять'],
};

perfectVerbs.set(выселить.name.text, выселить);

export { выселить };