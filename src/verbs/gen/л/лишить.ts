import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лишить: PerfectVerb = {
  name: Word('лишить', 3),
  singular1stPerson: Word('лишу', 3),
  singular2ndPerson: Word('лишишь', 3),
  singular3rdPerson: Word('лишит', 3),
  plural1stPerson: Word('лишим', 3),
  plural2ndPerson: Word('лишите', 3),
  plural3rdPerson: Word('лишат', 3),
  masculinePast: Word('лишил', 3),
  femininePast: Word('лишила', 3),
  neuterPast: Word('лишило', 3),
  pluralPast: Word('лишили', 3),
  imperativeInformal: Word('лиши', 3),
  imperativeFormal: Word('лишите', 3),
  imperfect: ['лишать'],
};

perfectVerbs.set(лишить.name.text, лишить);

export { лишить };