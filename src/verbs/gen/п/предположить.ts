import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предположить: PerfectVerb = {
  name: Word('предположить', 9),
  singular1stPerson: Word('предположу', 9),
  singular2ndPerson: Word('предположишь', 7),
  singular3rdPerson: Word('предположит', 7),
  plural1stPerson: Word('предположим', 7),
  plural2ndPerson: Word('предположите', 7),
  plural3rdPerson: Word('предположат', 7),
  masculinePast: Word('предположил', 9),
  femininePast: Word('предположила', 9),
  neuterPast: Word('предположило', 9),
  pluralPast: Word('предположили', 9),
  imperativeInformal: Word('предположи', 9),
  imperativeFormal: Word('предположите', 9),
  imperfect: ['предполагать'],
};

perfectVerbs.set(предположить.name.text, предположить);

export { предположить };