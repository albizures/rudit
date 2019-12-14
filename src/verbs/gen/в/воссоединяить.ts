import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоединяить: PerfectVerb = {
  name: Word('воссоединяить', 9),
  singular1stPerson: Word('воссоединяю', 9),
  singular2ndPerson: Word('воссоединяишь', 9),
  singular3rdPerson: Word('воссоединяит', 9),
  plural1stPerson: Word('воссоединяим', 9),
  plural2ndPerson: Word('воссоединяите', 9),
  plural3rdPerson: Word('воссоединяят', 9),
  masculinePast: Word('воссоединяил', 9),
  femininePast: Word('воссоединяила', 9),
  neuterPast: Word('воссоединяило', 9),
  pluralPast: Word('воссоединяили', 9),
  imperativeInformal: Word('воссоединяй', 9),
  imperativeFormal: Word('воссоединяйте', 9),
  imperfect: ['воссоединить'],
};

perfectVerbs.set(воссоединяить.name.text, воссоединяить);

export { воссоединяить };