import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклонить: PerfectVerb = {
  name: Word('наклонить', 6),
  singular1stPerson: Word('наклоню', 6),
  singular2ndPerson: Word('наклонишь', 4),
  singular3rdPerson: Word('наклонит', 4),
  plural1stPerson: Word('наклоним', 4),
  plural2ndPerson: Word('наклоните', 4),
  plural3rdPerson: Word('наклонят', 4),
  masculinePast: Word('наклонил', 6),
  femininePast: Word('наклонила', 6),
  neuterPast: Word('наклонило', 6),
  pluralPast: Word('наклонили', 6),
  imperativeInformal: Word('наклони', 6),
  imperativeFormal: Word('наклоните', 6),
  imperfect: ['наклонять'],
};

perfectVerbs.set(наклонить.name.text, наклонить);

export { наклонить };