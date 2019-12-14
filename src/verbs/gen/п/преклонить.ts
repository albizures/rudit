import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преклонить: PerfectVerb = {
  name: Word('преклонить', 7),
  singular1stPerson: Word('преклоню', 7),
  singular2ndPerson: Word('преклонишь', 7),
  singular3rdPerson: Word('преклонит', 7),
  plural1stPerson: Word('преклоним', 7),
  plural2ndPerson: Word('преклоните', 7),
  plural3rdPerson: Word('преклонят', 7),
  masculinePast: Word('преклонил', 7),
  femininePast: Word('преклонила', 7),
  neuterPast: Word('преклонило', 7),
  pluralPast: Word('преклонили', 7),
  imperativeInformal: Word('преклони', 7),
  imperativeFormal: Word('преклоните', 7),
  imperfect: ['преклонять'],
};

perfectVerbs.set(преклонить.name.text, преклонить);

export { преклонить };