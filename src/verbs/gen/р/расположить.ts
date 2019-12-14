import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расположить: PerfectVerb = {
  name: Word('расположить', 8),
  singular1stPerson: Word('расположу', 8),
  singular2ndPerson: Word('расположишь', 6),
  singular3rdPerson: Word('расположит', 6),
  plural1stPerson: Word('расположим', 6),
  plural2ndPerson: Word('расположите', 6),
  plural3rdPerson: Word('расположат', 6),
  masculinePast: Word('расположил', 8),
  femininePast: Word('расположила', 8),
  neuterPast: Word('расположило', 8),
  pluralPast: Word('расположили', 8),
  imperativeInformal: Word('расположи', 8),
  imperativeFormal: Word('расположите', 8),
  imperfect: ['располагать'],
};

perfectVerbs.set(расположить.name.text, расположить);

export { расположить };